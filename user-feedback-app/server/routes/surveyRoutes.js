const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

function surveyRoutes(app) {

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id })
            .select({ recipients: false });

        res.send(surveys);
    });

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send("Thank you for voting!")
    });

    app.post('/api/surveys/webhooks', (req, res) => {

        const p = new Path('/api/surveys/:surveyId/:choice');

        _.chain(req.body)
            .map(({ email, url }) => {
                const match = p.test(new URL(url).pathname);
                if (match) {
                    return { email, surveyId: match.surveyId, choice: match.choice };
                }
            })
            .compact()  //remove undefined elements in the array
            .uniqBy('email', 'surveyId')  //removes duplicate elements in array
            .each(({ surveyId, email, choice }) => {
                Survey.updateOne(  //look at the Survey collection, find and update one record
                    {
                        _id: surveyId,
                        recipients: {
                            $elemMatch: { email: email, responded: false }
                        }
                    },
                    {
                        $inc: { [choice]: 1 },  // yes or no is written as [choice]
                        $set: { 'recipients.$.responded': true }, //here $ means the record selected using $elemMatch above
                        lastResponded: new Date()
                    }).exec();
            })
            .value();

        res.send({});
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => { //make sure user is logged in and he has enough credits to create surveys
        const { title, subject, body, recipients } = req.body;
        survey = new Survey({
            title,
            subject,
            body,
            // recipients: recipients.split(',').map(email => { return { email: email } })
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
        //place to send an email
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();

            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user)
        } catch (err) {
            res.status(422).send(err);
        }
    });
}
module.exports = surveyRoutes;