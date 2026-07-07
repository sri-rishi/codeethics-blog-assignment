import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    posts: [Post!]!
  }

  type Mutation {
    addPost(title: String!, content: String!): Post!
  }
`;

export default typeDefs;