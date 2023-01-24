import mongoose from 'mongoose'
import { nanoid } from 'nanoid';

interface ITodo {
    id: string ;
    title: string;
    description: string;
}

interface todoModelInterface extends mongoose.Model<TodoDoc> {
    build(attr: ITodo): TodoDoc
}

interface TodoDoc extends mongoose.Document {
    id: string ;
    title: string;
    description: string;
}

const todoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: () => nanoid(),
        index: { unique: true },
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

todoSchema.statics.build = (attr: ITodo) => {
    return new Todo(attr)
}

const Todo = mongoose.model<TodoDoc, todoModelInterface>('Todo', todoSchema)

Todo.build({
    id: nanoid(),
    title: 'some title',
    description: 'some description'
})

export { Todo }



