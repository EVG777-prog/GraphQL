export const resolversTracks = {
  Query: {
    track: (_: undefined, { id }: any, {dataSources}: any) => dataSources.tracksAPI.getTrack(id),
  },
  
  Mutation: {
    createTrack: (_: undefined, { input }: any, {dataSources}: any) => dataSources.tracksAPI.createTrack(input),
    updateTrack: (_: undefined, { id, input }: any, {dataSources}: any) => dataSources.tracksAPI.updateTrack(id, input),
    deleteTrack: (_: undefined, { id }: any, {dataSources}: any) => dataSources.tracksAPI.deleteTrack(id),
  }
  
};

