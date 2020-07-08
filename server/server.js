const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/api/v1/postgres", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      title: "select * from res",
      review: "remember this",
      ratings: "5",
    },
  });
});

app.get("/api/v1/postgres/:id", (req, res) => {
  res.status(200).json({ status: "success", data: "for id" });
});

app.post("/api/v1/postgres/submit", (req, res) => {
  res.status(200).json({ status: "under construction" });
});

app.put("/api/v1/postgres/:id", (req, res) => {
  res.status(200).json({ status: "update underconstruct" });
});

app.delete("/api/v1/postgres/:id", (req, res) => {
  res.status(200).json({ status: "delete underconstruct" });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server up and listening to to ${PORT}`);
});
