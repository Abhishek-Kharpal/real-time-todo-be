const todoService = require('../services/todo');
const socketIoObject = require('../../index');

/**
 * @description Controller to get all todos
 * @param {Object} req
 * @param {Object} res
 * @return {Object} todos
 * @throws {Object} 500 - Internal Server Error
 */
const getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};


/**
 * @description Controller to get a todo with requested id
 * @param {Object} req
 * @param {Object} res
 * @return {Object} todo with requested id
 * @throws {Object} 500 - Internal Server Error
 */
const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await todoService.getTodo(id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({error: err.message});
  };
};

/**
 * @description Controller to create a todo and emit a event to add the todo
 * @param {*} req
 * @param {*} res
 * @return {Object} created todo
 */
const createTodo = async (req, res) => {
  const {title, content} = req.body;
  const todo = await todoService.createTodo(title, content);
  socketIoObject.ioObject.emit('addTodo', todo);
  res.status(201).json(todo);
};

/**
 * @description Controller to update a todo and emit a event to update the todo
 * @param {*} req
 * @param {*} res
 * @return {Object} updated todo
 * @throws {Object} 500 - Internal Server Error
 */
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

/**
 * @description Controller to delete a todo and emit a event to delete the todo
 * @param {*} req
 * @param {*} res
 */
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
