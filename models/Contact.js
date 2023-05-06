const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
{
  name: {type: String, required: [true, "include a name"]},
  // email: {type: String, required: [true, "include email"]},
  phone: {type: String, required: [true, "include phone number"]},
  // location: {type: String},
  message: {type: String},
 
}, {timestamps: true})

const Contact = mongoose.model("Contact", ContactSchema)

module.exports = Contact