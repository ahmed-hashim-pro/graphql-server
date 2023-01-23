import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from 'fs';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const typeDefs = `#graphql
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
# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
    books: [Book]
    authors: [Author]
    user(id: ID!): User
    booksByTitle(Title:String): [Book]
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


const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];
const authors = [
    {
        name: 'Kate Chopin',
        books: [books[0]]
    },
    {
        name: 'Paul Auster',
        books: [books[1]]

    },
];

const users = [
    {
        id: '1',
        name: 'Elizabeth Bennet',
    },
    {
        id: '2',
        name: 'Fitzwilliam Darcy',
    },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
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

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
