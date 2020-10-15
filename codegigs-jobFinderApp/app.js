const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

app.use(express.json());

app.get('/', (req,res)=>res.send("Running..."))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server Up At ${PORT}`));