const db = require("../db/models");

const todo = {
  getAll: async (req, res) => {
    const result = await db.Todo.findAll();
    return res.json(result);
  },
};

module.exports = {
  todo,
};
