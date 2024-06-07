const express = require('express');
const {getTodos,addTodos,updateTodos,deleteTodos} = require('../controllers/todoc');
const router = express.Router();
router.get('/',getTodos);
router.post('/',addTodos);
router.patch('/:id',updateTodos);
router.delete('/:id',deleteTodos);
module.exports = router;