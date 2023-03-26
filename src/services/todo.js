const db = require('../../database/models/index');

const getAllTodos = async () => {
  return await db.todo.findAll();
};

const getTodo = async (id) => {
  const todo = await db.todo.findByPk(id);
  if(!todo) throw new Error('Todo not found');
  return todo;
};

const createTodo = async (title,content) => {
  return await db.todo.create({title,content});
};

const updateTodo = async (id, title, content) => {
  const todoToUpdate = await db.todo.findByPk(id);
  if(!todoToUpdate) throw new Error('Todo not found');
  return await todoToUpdate.update({title,content});
};

const deleteTodo = async (id) => {
  const todoToDelete = await db.todo.findByPk(id);
  if(!todoToDelete) throw new Error('Todo not found');
  return await todoToDelete.destroy();
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};