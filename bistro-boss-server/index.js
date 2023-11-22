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
const cartCollection = db.collection("carts");

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
app.get("/carts", async (req, res) => {
  const email = req.query.email;
  const query = { email: email };
  const cartItems = await cartCollection.find(query).toArray();
  res.send(cartItems);
});

app.post("/carts", async (req, res) => {
  const item = req.body;
  const result = await cartCollection.insertOne(item);
  res.send(result);
});

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is runnig on port ${port}`);
});
