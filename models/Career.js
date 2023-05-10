const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CareerSchema = new Schema(
{
  name: {type: String, required: [true, "include a name"]},
  phone: {type: String, required: [true, "include phone number"]},
  message: {type: String},
 
}, {timestamps: true})

const Career = mongoose.model("Career", CareerSchema)

module.exports = Career