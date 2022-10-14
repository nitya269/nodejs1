const http=require("http");
http.createServer((req,res)=>{
    res.write("hello world");
    res.end()
    console.log("gvgvghfh")
}).listen(3000,()=>{
  console.log("hello");
})


    
