import { gql } from 'apollo-server';

export const typeDefsUsers = gql`
  extend type Query {
    "Get token"
    jwt(email: String!, password: String!): String
    "Get user by id"
    user(id: String!): UserResponse
  }

  type Mutation {
    "Add user"
    register(firstName: String!, lastName: String!, email: String!, password: String!): UserResponse
  }

  type UserResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    user: User
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }
`;
