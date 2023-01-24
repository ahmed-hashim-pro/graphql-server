import books from "../models/books.js";
import users from "../models/users.js";
import authors from "../models/authors.js";
import {Todo} from "../models/todo.js";
import { nanoid } from 'nanoid';


export const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors,
        booksByTitle: (parent, args, contextValue, info) => {

            return books.filter((book) => book.title.includes(args.Title));

        },
        user(parent, args, contextValue, info) {
            return users.find((user) => user.id === args.id);
        },

        async todos() {
            const todo = await Todo.find({})
            return todo;
        },

        async addTodo(parent, args, contextValue, info) {
            const { title, description } = args;

            console.log(title)
            console.log(description)
            const todo = Todo.build({id:nanoid(), title, description })
            await todo.save()
            return todo;
        },





    },
};

// export default resolvers
