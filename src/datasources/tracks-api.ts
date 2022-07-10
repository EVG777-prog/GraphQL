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
    const updateTaskRes = await this.post('', input);
    return {
      ...updateTaskRes,
      id: updateTaskRes._id,
    };
  }

  async updateTrack(id: string, input: any) {
    const updateTaskRes = await this.put(id, input);
    return {
      ...updateTaskRes,
      id: updateTaskRes._id,
    };
  }

  deleteTrack(id: string) {
    return this.delete(id);
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
}
