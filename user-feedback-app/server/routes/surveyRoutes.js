const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

function surveyRoutes(app) {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => { //make sure user is logged in and he has enough credits to create surveys
        const { title, subject, body, recipients } = req.body();
        survey = new Survey({
            title,
            subject,
            body,
            // recipients: recipients.split(',').map(email => { return { email: email } })
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
    });
}
module.exports = surveyRoutes;