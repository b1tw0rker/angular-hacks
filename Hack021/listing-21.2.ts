const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    user(id: Int!): User
  }

  type User {
    id: Int
    name: String
  }
`);
