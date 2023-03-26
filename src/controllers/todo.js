const todoService = require('../services/todo');

const getAllTodos = async (req, res) => {
  try{
    const todos = await todoService.getAllTodos();
    res.status(200).json(todos);
  }
  catch(err){
    res.status(500).json({error:err.message})
  }
};

const getTodo = async (req, res) => {
  try{
    const id = req.params.id;
    const todo = await todoService.getTodo(id);
    res.status(200).json(todo);
  }
  catch(err){
    res.status(500).json({error:err.message})
  };
};

const createTodo = async (req, res) => {
  try{
    const {title,content} =  req.body;
    const todo = await todoService.createTodo(title,content);
    res.status(201).json(todo);
  }
  catch(err){
    res.status(500).json({error:err.message})
  };
};

const updateTodo = async (req, res) => {
  try{
    const {title,content} = req.body;
    const id = req.params.id;
    const todo = await todoService.updateTodo(id,title,content);
    res.status(200).json(todo);
  }
  catch(err){
    res.status(500).json({error:err.message})
  };
};

const deleteTodo = async (req, res) => {
  try{
    const id = req.params.id;
    const todo = await todoService.deleteTodo(id);
    res.status(204).json();
  }
  catch(err){
    res.status(500).json({error:err.message})
  };
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};