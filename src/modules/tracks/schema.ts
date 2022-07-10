import { gql } from 'apollo-server';

export const typeDefsTracks = gql`
  extend type Query {
    "Get track"
    track(id: ID!): Track
  }

  type Mutation {
    "Create track"
    createTrack(input: CreateTrackInput): Track
    "Update track"
    updateTrack(id: ID!, input: UpdateTrackInput): Track
    "Delete track"
    deleteTrack(id: ID!): DeleteResponse
  }

  input CreateTrackInput {
    title: String!
    albumId: String
    artistsIds: [String]
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  input UpdateTrackInput {
    title: String
    albumId: String
    artistsIds: [String]
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  type DeleteResponse {
    "Delete response"
    deleted: Boolean
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Artist]
    website: String
    genres: [Genre]
  }

  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
`;
