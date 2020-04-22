const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');   //fetch model(schema) called users

passport.serializeUser((user, done) => {    //called automatically by passport when the user profile is fetched from google, the same model instance is used in this method. The 'user' argument here is the 2nd argument of done method used below inside passport.use()
    done(null, user.id);    //insert the user ID, assigned to the user recored from Mongo, into the cookie
});

passport.deserializeUser((id, done) => {    //this method is called when user makes a follow up request after he has been logged in/authenticated.During this request, the browser attached the cookie with the request.The passport will take out the id from the cookie and pass it to this method
    User.findById(id)
        .then(user => {
            done(null, user);
        });    //get the id out of the cookie, use it to find the user in DB and return that user(model instance)
});
//with async await
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {

    const existingUser = await User.findOne({ googleId: profile.id });  //control comes inside this callback when google returns the google id (profile id) after user authenticates himslef using google login and gives our app the required permissions specified inside scope of get call (/auth/google)
    if (existingUser) {
        return done(null, existingUser);
    }
    const user = await new User({ googleId: profile.id }).save();
    done(null, user);   //done is part of passport. It's a callback which informs that we are all finished.
}
));
//without async await
    // (accessToken, refreshToken, profile, done) => {

    //    User.findOne({ googleId: profile.id })  
    //         .then((existingUser) => {
    //             if (existingUser) {
    //                 done(null, existingUser);
    //             }
    //             else {
    //                 new User({ googleId: profile.id })
    //                     .save()
    //                     .then(user => done(null, user));
    //             }
    //         }
    //         );

    // }