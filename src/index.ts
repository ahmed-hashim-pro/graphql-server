
import {startStandaloneServer} from "@apollo/server/standalone";
import {ApolloServer} from "@apollo/server";
import {typeDefs} from "./typeDefs/typeDef.js";
import {resolvers} from "./resolvers/resolvers.js";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;


import config from "./config/db.config.js"
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const PORT = process.env.NODE_DOCKER_PORT || 4000 ;

const { url } = await startStandaloneServer(server, {
    listen: { port: PORT as number},
});
console.log(`🚀  Server ready at: ${url}`);

try {

    await mongoose.connect(config.url);
    console.log('connected to database')
} catch (error) {
    console.log(error)
}
