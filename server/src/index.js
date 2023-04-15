const {ApolloServer} = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone')
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require('./schema');
const mocks = require('./mockData');
// import { mocks } from './mockData';

const startMyServer = async () => {
    const server = new ApolloServer({ 
        schema: addMocksToSchema({
        schema: makeExecutableSchema({ typeDefs }),
        mocks,
      }),})
    const {url} = await startStandaloneServer(server)
    console.log(`server is running at ${url}`)
    // console.log(server)
}

startMyServer()