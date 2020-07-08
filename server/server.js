const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/index");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//get all  query note
app.get("/api/v1/postgres", async (req, res) => {
  try {
    const result = await db.query("select * from topic");
    console.log(result);

    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      info: `${error}`,
    });
  }
});

//detail query note;
app.get("/api/v1/postgres/:id", async (req, res) => {
  console.log(req.params.id);
  const query = {
    text: `select * from topic where id = $1`,
    values: [req.params.id],
  };

  try {
    const result = await db.query(query);
    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      info: `${error}`,
    });
  }
});

//addd query note
app.post("/api/v1/postgres", async (req, res) => {
  const query = {
    text: `INSERT INTO topic(topic_name, lang) values( $1, $2) returning *`,
    values: [req.body.topic_name, req.body.lang],
  };

  try {
    const result = await db.query(query);
    res.status(200).json({
      status: "success",
      info: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      info: `${error}`,
    });
  }
});

//update the topic
app.put("/api/v1/postgres/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE note SET topic_name = $1, lang = $2, where id = $4 returning *",
      [req.body.topic_name, req.body.lang, req.params.id]
    );

    res.status(200).json({
      status: "succes",
      data: {
        note: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      info: `${error}`,
    });
  }
});

//POST note topic;
app.post("/api/v1/postgres/:id/note", (req, res) => {
  const query = {
    text: `INSERT INTO note(topic_id, code, explanation, rating) values( $1, $2, $3, $4) returning *`,
    values: [
      req.body.topic_id,
      req.body.code,
      req.body.explanation,
      req.body.rating,
    ],
  };

  try {
    const results = db.query("DELETE FROM topic where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "sucess",
      data: {
        note: results,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      info: `${error}`,
    });
  }
});

//delete topic

app.post("/api/v1/postgres/:id", async (req, res) => {
  const query = {
    text: `DELETE FROM restaurants where id = $1`,
    values: [req.params.id],
  };

  try {
    const result = db.query(query);
    res.json({
      status: "succes",
      data: {
        note: result,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      info: `${error}`,
    });
  }
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server up and listening to to ${PORT}`);
});
