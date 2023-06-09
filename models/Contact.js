const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
{
  name: {type: String, required: [true, "include a name"]},
  phone: {type: String, required: [true, "include phone number"]},
  location: {type: String, required: [true, "include address"]},
  message: {type: String},
 
}, {timestamps: true})

const Contact = mongoose.model("Contact", ContactSchema)

module.exports = Contact