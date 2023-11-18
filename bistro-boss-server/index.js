const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// db connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0vftcn5.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dbConnect = async () => {
  try {
    client.connect();
    console.log("Database Connected Successfully✅");
  } catch (error) {
    console.log(error.name, error.message);
  }
};
dbConnect();

const db = client.db("bistroDB");
const menuCollection = db.collection("menu");
const reviewCollection = db.collection("reviews");

app.get("/menu", async (req, res) => {
  try {
    const menuData = await menuCollection.find().toArray();
    res.send(menuData);
  } catch (error) {
    res.send(error.message);
  }
});
app.get("/review", async (req, res) => {
  try {
    const menuData = await reviewCollection.find().toArray();
    res.send(menuData);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is runnig on port ${port}`);
});
