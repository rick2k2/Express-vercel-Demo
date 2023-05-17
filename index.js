import express from "express";
const app = express();
const port = 9000;

app.use("/",(req,res)=>{
    res.json("Hello from Express This is node js New app By Rick Saha which is host in vercel");
})


app.listen(port,()=>{
    console.log(`Starting Server on ${port}`);
})

