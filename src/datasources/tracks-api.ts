import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';


export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3006/v1/tracks/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async createTrack(input: any) {
    const newTrackRes = await this.post('', input);
    return {
      ...newTrackRes,
      id: newTrackRes._id,
    };
  }

  async updateTrack(id: string, input: any) {
    const updateTrackkRes = await this.put(id, input);
    return {
      ...updateTrackkRes,
      id: updateTrackkRes._id,
    };
  }

  async deleteTrack(id: string) {
    const res = await this.delete(id);
    console.log(res);
    if (res.deletedCount === 1) {
      return { deleted: true };
    }
    return { deleted: false };
  }

  async getTrack(id: string) {
    const trackRes = await this.get(id);
    console.log(trackRes);
    return {
      id: trackRes._id,
      title: trackRes.title,
      album: trackRes.album,
      artists: trackRes.artists,
      bands: trackRes.bands,
      duration: trackRes.duration,
      released: trackRes.released,
      genres: trackRes.genres,
    };
  }

  async getTracks() {
    return (await this.get('')).items;
  }
}
