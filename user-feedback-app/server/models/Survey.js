const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],  //sub-document collection : recipient is a list (array) of recipientSchema model/collection
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }, //we are creating a relationship here. By defining this propery, we are saying that,
    //every survey belongs to a particular User.
    dateSent: Date,
    lastResponded: Date
});
mongoose.model('surveys', surveySchema);