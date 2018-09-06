
const express = require("express");
const path = require("path");

const viewsFolder = "html";

// skappa applikationsvariabel som använder express
const app = express();


// använda sig av publika filer css, js, bilder html etc
app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,viewsFolder,"index.html"));
});

app.get("/about",(req,res)=>{

    res.sendFile(path.join(__dirname,viewsFolder,"about.html"));

});





app.listen(3000,()=>{
    console.log("express listen on port 3000");
})


