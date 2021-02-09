const mongoDB = require('mongoose');

const todoSchema = mongoDB.Schema({

    _id: mongoDB.Schema.Types.ObjectId,
    title: {  type:String, required: true},
    completed: { type: Boolean, default: false },

    created: { type: Date, default: Date.now() }

})

module.exports = mongoDB.model('todo', todoSchema);