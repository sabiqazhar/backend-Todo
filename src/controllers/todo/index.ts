import { Request, Response } from "express";

import TodoModel from '../../models/todo'
import {Todo} from '../../types/todo'

export const getTodo = async (req: Request, res: Response): Promise<void> => {
    const todos: Todo[] = await TodoModel.find()

    res.status(200).json({todos})
}

export const getTodoById = async (req: Request, res: Response): Promise<void> => {
    await TodoModel.findById(req.params.id, (err, result)=>{
        if (err){
            res.status(400).json({
                error: err
            })
        } else{
            res.status(200).json({
                result
            })
        }
    })
}

export const postTodo =async (req: Request, res: Response): Promise<void> => {
    const body: Pick<Todo, 'title' | 'status'> = req.body

    if (!body.title || !body.status) {
        res.status(401).json({
            status: 401,
            message: `Validation error: Todo validation failed: title: ${body.title}, status: ${body.status}` 
        })
        return
    }

    const newTodoModel = new TodoModel({
        title: body.title,
        status: body.status
    })

    const newTodo = await newTodoModel.save()
    const updateAllTodoAfterSave = await TodoModel.find()

    res.status(201).json({
        message: "data added!",
        addedTodo: newTodo,
        updateAllTodoAfterSave: updateAllTodoAfterSave
    })
}

export const putTodo = async (req: Request, res: Response): Promise<void> => {
    const {params: {id}, body} = req

    if (!body.title || !body.status || !id){
        res.status(401).json({
            status: 401,
            message: 'Validation error: id or required body properties is not defined'
        })
        return
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate({_id: id}, body)
    const updateAllTodoAfterUpdate = await TodoModel.find()

    if (!updatedTodo){
        res.status(501).json({
            status: 501,
            message: "Edit todo failed! not implement!"
        })
        return
    }

    res.status(200).json({
        message: "data updated!",
        updatedTodo,
        updateAllTodoAfterSave: updateAllTodoAfterUpdate
    })
}

export const deleteTodo =async (req: Request, res: Response): Promise<void> => {
    const {params: {id}} = req

    if(!id){
        res.status(401).json({
            status: 401,
            message: "Validation error: Params _id is not defined"
        })
        return
    }

    const deletedTodo = await TodoModel.findByIdAndDelete({_id: id})
    const allTodo = await TodoModel.find()

    if(!deletedTodo){
        res.status(501).json({
            status: 501,
            message: "Deleted failed! not implement!"
        })
        return
    }

    res.status(200).json({
        message: "Data deleted!",
        deletedTodo,
        allTodo: allTodo
    })
}