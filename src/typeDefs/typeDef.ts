export const  typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Book" type defines the queryable fields for every book in our data source.
type Book {
    title: String
    author: Author
}

type Author {
    name: String!
    books: [Book]
}
type User {
    id: ID!
    name: String
}
type Todo {
    id:String
    title: String!
    description: String!
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
    books: [Book]
    authors: [Author]
    user(id: ID!): User
    booksByTitle(Title:String): [Book]
    addTodo(title:String,description:String): Todo
    todos: [Todo]
}

query GetBooksAndAuthors {
    books {
        title
    }

    authors {
        name
    }
}
`;

 // export default typeDef;
 // export default typeDefs
