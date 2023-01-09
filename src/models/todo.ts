import {model, Schema} from 'mongoose'
import {Todo} from '../types/todo'

const todoSchema : Schema = new Schema({
    title: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
},
{timestamps : true}
)

export default model<Todo>('Todo', todoSchema)