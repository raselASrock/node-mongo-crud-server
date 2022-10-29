const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;


// middleware setup
app.use(cors());
app.use(express.json());


// async await
async function run(){

}

run().catch(err => console.log(err))

app.get("/", (req, res) =>{
    res.send("Hello from mongo crud server....");
});

app.listen(port, () =>{
    console.log(`Listening Node Server Running On Port Number: ${port}`);
})