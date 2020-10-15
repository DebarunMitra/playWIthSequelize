const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const db = require('./config/database');

const app = express();

//middleware
app.use(express.json());

// Body Parser
app.use(express.urlencoded({ extended: false }));
 
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Connect to db
db.authenticate().then(()=>{
    console.log("Connection has been established successfully.");
  }).catch(error=>{
    console.error("Unable to connect to the database:", error);
  }); 
  
// Index route
// app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server Up At ${PORT}`));