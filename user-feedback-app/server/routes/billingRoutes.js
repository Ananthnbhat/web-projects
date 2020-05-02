const keys = require("../config/keys")
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

const billingRoutes = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => { //app.post or app.get can have any number of parameters, but the last one should be a function
        //which handles/sends some response back
        // if(!req.user){
        //     return res.status(401).send({error: 'You must log in!'})
        // }
        try {
            const charge = await stripe.charges.create({
                amount: 50,
                currency: 'inr',
                description: '₹50 for 5 credits',
                source: req.body.id,
            });
            req.user.credits += 50;
            const user = await req.user.save();
            res.send(user);
        } catch (error) {
            console.log(error);
        }
    });
};

module.exports = billingRoutes;