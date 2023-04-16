const gql = require('graphql-tag');

const typeDefs = gql`
type Query {
  "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
  track(id: ID!): Track
}
"A track is a group of Modules that teaches about a specific topic"
type Track {
  # Fields go here
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
  description: String
  numberOfViews: Int
  modules: [Module!]!
}

type Module {
  id: ID!
  title: String!
  length: Int
}

"Author of a complete Track or a Module"
type Author {
    id: ID!
    name: String!
    photo: String
}
`

module.exports = typeDefs