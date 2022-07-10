export const resolversTracks = {
  Query: {
    track: (_: undefined, { id }: any, {dataSources}: any) => dataSources.tracksAPI.getTrack(id),
    tracks: (_: undefined, __: undefined, {dataSources}: any) => dataSources.tracksAPI.getTracks(),
  },
  
  Mutation: {
    createTrack: (_: undefined, { input }: any, {dataSources}: any) => dataSources.tracksAPI.createTrack(input),
    updateTrack: (_: undefined, { id, input }: any, {dataSources}: any) => dataSources.tracksAPI.updateTrack(id, input),
    deleteTrack: (_: undefined, { id }: any, {dataSources}: any) => dataSources.tracksAPI.deleteTrack(id),
  },
  
  Track: {
    id: ({ _id }: any) => _id,
    album: ({ id }: any, _: undefined, {dataSources}: any) => dataSources.albumsAPI.getAlbum(id),
  },
};

