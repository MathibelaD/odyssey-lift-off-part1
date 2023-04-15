const {ApolloServer} = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone')
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require('./schema');
const resolvers = require('./resolver');
const TrackAPI = require('./datasources/track-api')
// import { mocks } from './mockData';

const startMyServer = async () => {
    const server = new ApolloServer({ 
        typeDefs,
        resolvers,
      })
    const {url} = await startStandaloneServer(server,{
      context: async () => {
        return {
          dataSources : {
            trackAPI: new TrackAPI()
          }
        }
      }
    })
    console.log(`server is running at ${url}`)
    // console.log(server)
}

startMyServer()