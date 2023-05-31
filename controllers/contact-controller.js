// Imports
const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

// Import models through models/index.js
const db = require('../models')

// Create a transporter for sending email
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // replace with your SMTP host - single connection
  port: 587, // replace with your SMTP port
  auth: {
    user: 'user@example.com', // replace with your email address
    pass: 'password' // replace with your email password
  }
})

router.post("/", async (req, res, next) => 
{
  try 
  {
    const newContact = await db.Contact.create(req.body);
    // Send email notification
    const mailOptions = {
      from: 'user@example.com', // replace with your email address
      to: 'admin@example.com', // replace with the email address you want to send notification to
      subject: 'New contact form submission',
      text: `A new contact form has been submitted:\nName: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log(`Email sent: ${info.response}`)
      }
    })
    res.status(201).json(newContact);
  } catch (err) 
  {
    res.status(400).json({error: err.message,});
  }
});