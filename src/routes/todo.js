const express = require("express");
const { todo } = require("../controllers/todo");
const router = express.Router();

router.get("/", todo.getAll);

module.exports = {
  routerTodo: router,
};
