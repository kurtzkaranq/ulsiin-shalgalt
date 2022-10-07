const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./router");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const DB_CONNECTION = process.env.ATLAS_DATABASE;
app.use("/v1", router);
mongoose.connect(DB_CONNECTION).then(() => {
  app.listen(PORT, () => {
    console.log("app is working on " + PORT);
  });
});
