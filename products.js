const express = require("express");
const app = express();
app.use(express.json());//boady posure it takes anything as json formot
app.get('/',(req,res)=>{
    res.send('<h1> Hello World </h1>')
})
app.listen(5000,()=>{
    console.log("server running");
})
//creating API
const products=[
    {
        id:1,
       name: "samsung"
    },
    {
        id:2,
        name:"mi"
    },
    {
        id:3,
        name:"realme"
    }
]
app.get('/products',(req,res)=>{
    res.json(products)
})
app.get('/products/:id',(req,res)=>{
    const newData = products.filter(item =>item.id.toString() === req.param.id);
    return res.send(newData);
    console.log(id,name);
    return res.send("data stored")
})
app.post('/addproducts',(req,res)=>{
    const{id,name} = req.body;
})
app.listen(4000,()=>{
    console.log("server running");
})