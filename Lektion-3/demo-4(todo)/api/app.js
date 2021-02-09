const express = require('express');

const app = express();

const todosController = require('./controllers/todosController');


app.use((req, res, next) => {​​

    res.header("Access-Control-Allow-Origin", "*")
  
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With")
  
    if(req.method === "OPTIONS") {​​
  
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
  
    }​​
  
    next()
  
  }​​);

app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.use('/api/todos', todosController);
// app.use(express)
module.exports = app;