const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

function surveyRoutes(app) {

    app.get('/api/surveys/thanks', (req, res) => {
        res.send("Thank you for voting!")
    });

    app.post('/api/surveys/webhooks', (req, res)=>{
        console.log(req.body);
        res.send({});
    })

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