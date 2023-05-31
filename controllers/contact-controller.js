const express = require('express')
const router = express.Router()

// Import models through models/index.js
const db = require('../models')

// Middleware to print out the HTTP method and the URL path for every request to our terminal
router.use((req, res, next) => 
{    
	console.log(`${req.method} ${req.originalUrl}`);    
	next();
});


// Create route (POST HTTP VERB)
// Send data to create a new Contact
// Passport will verify the the token passed with the request's Authorization headers and set the current user for the request (req.user).
router.post("/", async (req, res, next) => 
{
  try 
	{
    const newContact = await db.Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (err) 
	{
    res.status(400).json({error: err.message,});
  }
});

module.exports = router