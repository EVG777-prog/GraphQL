import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';


export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3006/v1/tracks/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  createTrack(input: any) {
    return this.post('', input);
  }

  updateTrack(id: string, input: any) {
    return this.put(id, input);
  }

  async deleteTrack(id: string) {
    const res = await this.delete(id);
    console.log(res);
    if (res.deletedCount === 1) {
      return { deleted: true };
    }
    return { deleted: false };
  }

  getTrack(id: string) {
    return this.get(id);
  }

  async getTracks() {
    return (await this.get('')).items;
  }
}
