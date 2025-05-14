const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/tasks", async (req, res) => {
  const result = await db.query("SELECT * FROM tasks");
  res.json(result.rows);
});

router.post("/tasks", async (req, res) => {
  const { title } = req.body;
  const result = await db.query(
    "INSERT INTO tasks(title) VALUES($1) RETURNING *",
    [title]
  );
  res.status(201).json(result.rows[0]);
});

module.exports = router;
