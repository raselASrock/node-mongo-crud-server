const express = require("express");
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) =>{
    res.send("Simple Node Server Running....");
});

app.listen(port, () =>{
    console.log(`Simple Node Server Running On Port Number: ${port}`);
})