import express from "express";
const app = express();
const port = 9000;

app.use("/",(req,res)=>{
    res.json("Hello from Express");
})


app.listen(port,()=>{
    console.log(`Starting Server on ${port}`);
})

