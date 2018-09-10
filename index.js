
const express = require("express");
const path = require("path");
const fs = require('fs');
const bodyParser = require('body-parser');

const viewsFolder = "html";

// skappa applikationsvariabel som använder express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());


// använda sig av publika filer css, js, bilder html etc
app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,viewsFolder,"index.html"));
});

app.get("/about",(req,res)=>{
   
    res.header("x-test",{myName: "fredric"});
    res.sendFile(path.join(__dirname,viewsFolder,"about.html"));

});

app.get("/info",(req,res)=>{
   
    // Läsa fil 
    fs.readFile("public/info.json",(err,data)=>{

        if(err) throw err;
        
        else {

            // Gör om datan från filen till sträng
            let myData = data.toString();
            // parsar strängen till ett objekt
            myData =JSON.parse(myData);

            // Gör om objektet till en array
            let myArrData = Object.keys(myData).map( (index)=>{
                return myData[index];
            });
            
            // Ny data i objektform
            myNewData = {};
            myNewData.id = '1241243124124';
            myNewData.info = 'Now We have a mf array';

            // Uppdatera array med ny data
            myArrData.push(myNewData);

            console.log(myArrData);
            
            // skriver till fil
            fs.writeFile("public/info.json",JSON.stringify(myArrData), (err)=>{
                if(err) throw err;
            });


        }

    });
  

});


app.post("/info", (req, res)=>{

    console.log(JSON.stringify(req.body));


});





app.listen(3000,()=>{
    console.log("express listen on port 3000");
})


