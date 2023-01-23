import books from "../models/books.js";
import users from "../models/users.js";
import authors from "../models/authors.js";
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
    },
};
// export default resolvers
//# sourceMappingURL=resolvers.js.map