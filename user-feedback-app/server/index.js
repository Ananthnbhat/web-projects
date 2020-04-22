const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .catch(error => console.log(error));

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// app.get('/', (req, res) => {
//     res.send({ hi: 'there buddy' });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//place .npmrc under /Users/ananthnarayanbhat/