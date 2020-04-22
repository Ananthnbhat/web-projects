const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});
mongoose.model('users', userSchema);    //save a model in mongo called users
