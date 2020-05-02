const requireLogin = require('../middlewares/requireLogin');

function surveyRoutes(app) {
    app.post('/api/surveys', requireLogin, (req, res) => { //make sure user is logged in and he has enough credits to create surveys

    });
}
module.exports = surveyRoutes;