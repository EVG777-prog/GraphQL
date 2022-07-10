export const resolversUsers = {
  Query: {
    jwt: (_: undefined, { email, password }: any, {dataSources}: any) => dataSources.usersAPI.getToken(email, password),
    user: async (_: undefined, { id }: any, {dataSources}: any) => {
      try {
        const userRes = await dataSources.usersAPI.getUser(id);
        return {
          code: 200,
          success: true,
          message: `Successfully get user`,
          user: {
            id: userRes._id,
            firstName: userRes.firstName,
            lastName: userRes.lastName,
            email: userRes.email,
            password: userRes.password
          }
        };
      } catch (err: any) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null
        };
      }
    }
  },
  
  Mutation: {
    register: async (_: undefined, { firstName, lastName, email, password }: any, {dataSources}: any) => {
      try {
        const userRes = await dataSources.usersAPI.createNewUser({ firstName, lastName, email, password });
        return {
          code: 200,
          success: true,
          message: `Successfully add user`,
          user: {
            id: userRes._id,
            firstName: userRes.firstName,
            lastName: userRes.lastName,
            email: userRes.email,
            password: userRes.password
          }
        };
      } catch (err: any) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null
        };
      }
    }
  }
};

