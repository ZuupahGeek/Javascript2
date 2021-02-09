const router = require('express').Router();

const todoModel = require('../models/todos/todoModel');

router.get('/', todoModel.getTodos);

router.get('/:id', todoModel.getOneTodo);

router.post('/', todoModel.saveTodo);

router.patch('/:id', todoModel.updateTodo);

router.delete('/', todoModel.deleteTodo);



module.exports = router;