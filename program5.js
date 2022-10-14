var http = require("http");
http.createServer(function(req,res){
    //res.writeHead(200,{'content-Type':'text/html'});
    //res.write("the date and time" + myDateTime());
    res.write("hello");
    res.end();
}).listen(2000,(res,req)=>{
    console.log("sesghgxsfnj");     
});