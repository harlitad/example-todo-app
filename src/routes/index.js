const { Router } = require("express");
const { routerTodo } = require("./todo");
const router = Router();

router.use("/todos", routerTodo);

module.exports = {
  routes : router,
};
