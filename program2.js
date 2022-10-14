const http = require("http");
const fs = require("fs")
http.createServer((req,res)=>{
    fs.readFile('text.txt',(err,data)=>{
        res.write(data);
        res.end();
    })
    }).listen(3000,()=>{
        console.log(" server is Running");
    })

    //appendFile - used to add any content to the file
    //writeFile - the content is written to the file  by clearing already written content 
    //unclick is used to delete content