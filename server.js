//http model//
const http=require('http');//importing//
const port=8080;//declaring port for running in that declared port //
const server = http.createServer((res,req)=>{//creating server//
res.statusCode=200;
res.end("hello world");
})
server.listen(port,()=>{
    console.log("i am running");
})