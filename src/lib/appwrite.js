import { Client, Storage, Account} from 'appwrite';

const appwriteUrl = String(import.meta.env.VITE_APPWRITE_URL)

const appwriteProjectId = String(import.meta.env.VITE_APPWRITE_PROJECT_ID)

export const client = new Client();

client.setEndpoint(appwriteUrl).setProject(appwriteProjectId)

 const storage = new Storage(client);
 
 const account = new Account(client)

 export {storage, account}
