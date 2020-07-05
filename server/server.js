require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./db");

const app = express();

app.use(cors());
app.user(express.json());
app.use(morgan());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Port connect to ${PORT}`);
});
