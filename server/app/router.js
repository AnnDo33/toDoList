const express = require("express");

const router = express.Router();
const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here

router.get("/tasks", (req, res) => {
  client
    .query(
      "SELET * FROM tasks INNER JOIN status ON tasks.id_status = status.id"
    )
    .then((tasks) => {
      res.status(200).json(tasks);
    });
});
/* ************************************************************************* */

// Import itemActions module for handling item-related operations
// const itemActions = require("./controllers/itemActions");
// const client = require("../database/client");

// Route to get a list of items
// router.get("/items", itemActions.browse);

// Route to get a specific item by ID
// router.get("/items/:id", itemActions.read);

// Route to add a new item
// router.post("/items", itemActions.add);

/* ************************************************************************* */

module.exports = router;
