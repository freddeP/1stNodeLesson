// Detta är vår huvudsakliga fil för vår node-app

// Hämta in modul för http-hantering
const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url === "/")
    {
       res.end("hello world");
    }
    else if( req.url === "/about")
    {
        res.end("about");
    }

});  // end server


server.listen(3000);

console.log("listen on 3000");