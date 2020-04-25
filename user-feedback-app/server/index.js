const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .catch(error => console.log(error));

const app = express();

app.use(bodyParser.json());
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

if (process.env.NODE_ENV === 'production') {
    //Express will serve production assets like our main.js or main.css file.
    //if we dont have a specific route handler for a request, then look into client/build dir to find a file which matches the request.
    app.use(express.static('client/build'));
    //if no files match, then go to the below route handler, which is the last resort

    //Express will serve the index.html of it doesn't recognise the route.
    //last route handler.
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//place .npmrc under /Users/ananthnarayanbhat/