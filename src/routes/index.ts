import {Router} from 'express'
import {getTodo, getTodoById, postTodo, putTodo, deleteTodo} from '../controllers/todo/index'
import bodyParser from 'body-parser'

const router = Router()
const jsonParser = bodyParser.json()

router.get('/app/todo', getTodo)
router.post('/app/todo', jsonParser, postTodo)

router.get('/app/todo/:id', getTodoById)
router.put('/app/todo/:id', jsonParser,  putTodo)
router.delete('/app/todo/:id', jsonParser, deleteTodo)

export default router
