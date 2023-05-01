const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
{
  name: {type: String, required: [true, "need to include a name"]},
  email: {type: String, required: [true, "need to include email"]},
  phone: {type: String, required: [true, "need a phone number"]},
  location: {type: String},
  message: {type: String},
 
}, {timestamps: true})

const Contact = mongoose.model("Contact", ContactSchema)

module.exports = Contact