import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { User } from '../interfaces';

type GetTokenResponse = {
  jwt: string;
}

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users/';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  createNewUser({ firstName, lastName, password, email }: User) {
    // eslint-disable-next-line no-return-await
    return this.post('register', { firstName, lastName, password, email });
  }

  async getUser(id: string): Promise<User> {
    return this.get(id);
  }

  async getToken(email: string, password: string): Promise<string> {
    const { jwt }: GetTokenResponse = await this.post('login', { email, password });
    console.log(jwt);
    return jwt;
  }
}
