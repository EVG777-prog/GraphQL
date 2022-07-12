export const resolversAlbums = {
  Query: {
    album: (_: undefined, { id }: any, {dataSources}: any) => dataSources.albumsAPI.getAlbum(id),
    albums: (_: undefined, __: undefined, {dataSources}: any) => dataSources.albumsAPI.getAlbums(),
  },
  
  Mutation: {
    createAlbum: (_: undefined, { input }: any, {dataSources}: any) => dataSources.albumsAPI.createAlbum(input),
    updateAlbum: (_: undefined, { id, input }: any, {dataSources}: any) => dataSources.albumsAPI.updateAlbum(id, input),
    deleteAlbum: (_: undefined, { id }: any, {dataSources}: any) => dataSources.albumsAPI.deleteAlbum(id),
  },
  
  Album: {
    id: ({ _id }: any) => _id,
  },
};

