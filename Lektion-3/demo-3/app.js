const express = require('express');
const router = require('../demo-2/controllers/todosController');
const app = express();

router.get('/', (req, res) => {
    res.send('ett svar GET')
};

router.post('/', (req, res) => {
    res.send('ett svar POST')
};

module.exports = app;