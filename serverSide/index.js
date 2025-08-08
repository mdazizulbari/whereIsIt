const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bsqinhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const database = client.db("lostAndFoundDB");
    const itemCollection = database.collection("items");
    const recoveredCollection = database.collection("recoveredItems");

    app.post("/items", async (req, res) => {
      const newItem = req.body;
      console.log("Received new item data", newItem);
      const result = await itemCollection.insertOne(newItem);
      res.send(result);
    });

    app.get("/items", async (req, res) => {
      const result = await itemCollection.find().toArray();
      res.send(result);
    });

    app.get("/items/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await itemCollection.findOne(query);
      res.send(result);
    });

    app.put("/items/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedItem = req.body;
      const updatedDoc = {
        $set: updatedItem,
      };
      const result = await itemCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    app.delete("/items/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await itemCollection.deleteOne(query);
      res.send(result);
    });

    // recovered db api
    app.post("/recoveredItems", async (req, res) => {
      const newItem = req.body;

      console.log("Received new recovered item data", newItem);
      const result = await recoveredCollection.insertOne(newItem);
      res.send(result);
    });

    app.get("/recoveredItems", async (req, res) => {
      const result = await recoveredCollection.find().toArray();
      res.send(result);
    });

    app.get("/recoveredItems/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await recoveredCollection.findOne(query);
      res.send(result);
    });

    // app.put("/items/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const filter = { _id: new ObjectId(id) };
    //   const options = { upsert: true };
    //   const updatedItem = req.body;
    //   const updatedDoc = {
    //     $set: updatedItem,
    //   };
    //   const result = await itemCollection.updateOne(
    //     filter,
    //     updatedDoc,
    //     options
    //   );
    //   res.send(result);
    // });

    // app.delete("/items/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await itemCollection.deleteOne(query);
    //   res.send(result);
    // });

    // console.log("Pinged your deployment. Successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Lost and Found Server is running.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
