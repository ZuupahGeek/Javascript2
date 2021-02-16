const express = require('express');
const router = require('../demo-2/controllers/todosController');
const app = express();

const todosController = require('./controllers/todosController')

app.use(express.urlencoded({extended: false}));
app.use(express.json())



app.use('/api/todos', todosController);
// app.use(express)
module.exports = app;