import { ApolloServer, gql } from 'apollo-server';
import { typeDefsUsers } from './modules/users/schema';
import { typeDefsTracks } from './modules/tracks/schema';
import { typeDefsAlbums } from './modules/albums/schema';
import { resolversUsers } from './modules/users/resolvers';
import { resolversTracks } from './modules/tracks/resolvers';
import { resolversAlbums } from './modules/albums/resolvers';
import { UsersAPI } from './datasources/users-api';
import { TracksAPI } from './datasources/tracks-api';
import { AlbumsAPI } from './datasources/albums-api';

const baseTypeDefs = gql`
  type Query
`

const server = new ApolloServer({
  typeDefs: [baseTypeDefs, typeDefsUsers, typeDefsTracks, typeDefsAlbums],
  resolvers: [resolversUsers, resolversTracks, resolversAlbums],
  dataSources: () => ({
      usersAPI: new UsersAPI(),
      tracksAPI: new TracksAPI(),
      albumsAPI: new AlbumsAPI()
    }),
  context: ({ req }) => ({
    token: req.headers.authorization || ''
  }),

});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});