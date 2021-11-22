const express = require('express')
const Todo = require('../Models/Todo.js')

const route = express.Router()

//api endpoint to get all todos
route.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

//api endpoint to get specific todo
route.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    res.json({ message: error });
  }
});

//api to save new todo
route.post("/", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
  });

  newTodo.save().then(() => res.json())
});

//api to update todos
route.put("/update/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      {
        _id: req.params.id,
      },
      { 
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority
      }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

//api to delete todo
route.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Todo.deleteOne( { _id: req.params.id });
    res.json(deleted);
  } catch (error) {
    res.json(error);
  }
});

module.exports = route
