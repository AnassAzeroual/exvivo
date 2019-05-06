const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    fname : { type: String , required: true},
    lname : { type: String , required: true},
    email : { type: String , required: true}
});

module.exports = mongoose.model('contact', contactSchema);