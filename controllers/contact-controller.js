// Imports
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


// // Index route (GET HTTP VERB)
// // This route will catch GET requests to /contact/ and respond with all the contacts
// router.get('/', async (req, res) => 
// { 
// 	try 
// 	{
// 		const contact = await db.Contact.find({})
// 		res.status(200).json(contact)
// 	} catch (error) 
// 	{
// 		return next(error)
// 	}
// });

// // Show route (GET HTTP VERB)
// // This route will catch GET requests to /contact/index/ and respond with a single contact
// router.get('/:id', async (req, res, next) => 
// { 
// 	try 
// 	{
// 		const foundContact = await db.Contact.findById(req.params.id)
// 		res.status(200).json(foundContact)
// 	} catch (error) 
// 	{
// 		return next(error)
// 	}
// });

// Create route (POST HTTP VERB)
// Send data to create a new contact
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

// // Update route (PUT HTTP VERB)
// // Send data to update contact
// router.put("/:id", async (req, res) => 
// {
// 	try 
// 	{
// 		const updatedContact = await db.Contact.findByIdAndUpdate(
// 			req.params.id,
// 			req.body,
// 			{ new: true }
// 		)
// 		res.status(200).json(updatedContact)
// 	} catch (error) 
// 	{
// 		res.status(400).json({error: error.message})
// 	}
// })

// // Destroy route (DELETE HTTP VERB)
// // Send data to delete contact
// router.delete("/:id", async (req, res, next) => 
// {
//   try 
// 	{
//     const deletedContact = await db.Contact.findByIdAndRemove(req.params.id);
//     res.status(200).json(deletedContact);
//   } catch (err) 
// 	{
//     res.status(400).json({ error: err.message });
//   }
// });

module.exports = router