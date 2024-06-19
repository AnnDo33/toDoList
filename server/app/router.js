const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here

/* ************************************************************************* */

// Import itemActions module for handling item-related operations
const itemActions = require("./controllers/itemActions");
const statusActions = require("./controllers/statusActions");
// const client = require("../database/client");

// Route to get a list of items
router.get("/tasks", itemActions.browse);
router.get("/status", statusActions.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemActions.read);

// Route to add a new item
router.post("/tasks", itemActions.add);
router.post("/status", statusActions.add);

/* ************************************************************************* */

module.exports = router;
