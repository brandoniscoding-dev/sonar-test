require("dotenv").config();
const express = require("express");



const PORT = process.env.PORT 
const NOM = process.env.NOM

const app = express();

app.listen( PORT, ()=> {
    console.log(`serve running on port : `, PORT);
});
console.log('Je suis un pro : ', NOM);
