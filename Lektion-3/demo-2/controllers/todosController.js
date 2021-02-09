const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.send('todos från våran controller')
})


module.exports = router