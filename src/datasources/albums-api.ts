import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';


export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3005/v1/albums/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async createAlbum(input: any) {
    return this.post('', input);
  }

  async updateAlbum(id: string, input: any) {
    return this.put(id, input);
  }

  async deleteAlbum(id: string) {
    const res = await this.delete(id);
    if (res.deletedCount === 1) {
      return { deleted: true };
    }
    return { deleted: false };
  }

  async getAlbum(id: string) {
    const albumRes = await this.get(id);
    return albumRes;
  }

  async getAlbums() {
    return (await this.get('')).items;
  }
}
