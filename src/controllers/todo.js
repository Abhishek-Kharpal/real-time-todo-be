const todoService = require('../services/todo');
const socketIoObject = require('../../index');
const getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await todoService.getTodo(id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({error: err.message});
  };
};

const createTodo = async (req, res) => {
  const {title, content} = req.body;
  const todo = await todoService.createTodo(title, content);
  socketIoObject.ioObject.emit('addTodo', todo);
  res.status(201).json(todo);
};

const updateTodo = async (req, res) => {
  try {
    const {title, content} = req.body;
    const id = req.params.id;
    const todo = await todoService.updateTodo(id, title, content);
    socketIoObject.ioObject.emit('updateTodo', todo);
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({error: err.message});
  };
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    await todoService.deleteTodo(id);
    socketIoObject.ioObject.emit('deleteTodo', id);
    res.status(204).json();
  } catch (err) {
    res.status(500).json({error: err.message});
  };
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
