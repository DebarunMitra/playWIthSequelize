const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const db = require('./config/database');

const app = express();

//middleware
app.use(express.json());

//Connect to db
db.authenticate().then(()=>{
    console.log("Connection has been established successfully.");
  }).catch(error=>{
    console.error("Unable to connect to the database:", error);
  });
 

app.get('/', (req,res)=>res.send("Running..."))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server Up At ${PORT}`));