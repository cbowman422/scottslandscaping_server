///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// Initialize dotenv
require("dotenv").config();

// Import configuration to mongoDB using mongoose
require("./config/db.connection");

// Pull PORT from .env, Cors and morgan dependencies , Import express
const { PORT } = process.env;
const cors = require('cors')
const morgan = require('morgan')
const express = require('express');

// Import controllers and set them as variables

const contactController = require('./controllers/contact-controller')
const careerController = require('./controllers/career-controller')

// Create application object as express
const app = express();

///////////////////////////////
// MIDDLEWARE
////////////////////////////////

// For cross origin request - open channel , morgan request logger (for dev), and parse json data
app.use(cors()) 
app.use(morgan('dev'))
app.use(express.json()) 

// Controller middleware
app.use('/contact', contactController)
app.use('/career', careerController)

///////////////////////////////
// ROUTES
////////////////////////////////

// Reroute to /contact from /
app.get('/', (req, res)=>res.redirect('/contact'))

// Error handling / 404
app.get('/error', (req,res)=>
{
  res.status(500).send('something went wrong...')
})

app.use((error, req,res,next)=>
{
  if(error)
  {
    return res.status(404).send(error.message)
  }
  next()
})

app.get('*', (req,res,next)=>
{
  if(req.error)
  {
    res.status(404).send(`Error: ${req.error.message}`)
  }else 
  {
    res.redirect('/error/')
  }
})

// Connection to port
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));