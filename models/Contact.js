const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
{
  contact: {type: String, required: [true, "need an contact"]},
  post_id: 
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
}, {timestamps: true})

const Contact = mongoose.model("Contact", ContactSchema)

module.exports = Contact