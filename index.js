// const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;


// middleware setup
app.use(cors());
app.use(express.json());

// user: mondoDBUser1
// pass: OOSnHJDCBbcIWPbP






// const uri = "mongodb+srv://mondoDBUser1:OOSnHJDCBbcIWPbP@cluster1.yyonl1x.mongodb.net/?authSource=admin";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mondoDBUser1:OOSnHJDCBbcIWPbP@cluster1.yyonl1x.mongodb.net/?authSource=admin";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


async function run(){
    try{
      const userCollection = client.db('Node-Mongo-Crud').collection('users');

      app.get('/users', async (req, res) =>{
        const query = {};
        const cursor = userCollection.find(query)
        const users = await cursor.toArray();
        res.send(users)
      });

      app.get('/users/:id', async (req, res) =>{
        const id = req.params.id;
        const query = {_id: ObjectId(id)}
        const user = await userCollection.findOne(query)
        res.send(user)
      })
      
      app.post('/users', async (req, res) =>{
          const user = req.body;
          console.log(user);
          const result = await userCollection.insertOne(user);
          res.send(result)
      })

      app.delete('/users/:id', async(req, res) =>{
        const id = req.params.id;
        const query = {_id: ObjectId(id)}
        const result = await userCollection.deleteOne(query)
        console.log('Trying to delete',id)
        console.log(result);
        res.send(result)

      });
    }
    catch(err){
      console.log(err);
    }
    finally{

    }
}
run().catch(error => console.log(error))



// async await


app.get("/", (req, res) =>{
    res.send("Hello from mongo crud server....");
});

app.listen(port, () =>{
    console.log(`Listening Node Server Running On Port Number: ${port}`);
})