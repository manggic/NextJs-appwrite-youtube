import conf from "@/conf/config";

import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
  async createUserAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error: any) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const user = await this.getCurrentUser();

      return Boolean(user);
    } catch (error: any) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error: any) {
      throw error;
    }
  }

  async logout() {
    try {
      return await account.deleteSession('current');
    } catch (error: any) {
      throw error;
    }
  }
}



const appwriteService = new AppwriteService()



export default appwriteService
