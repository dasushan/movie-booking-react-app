import { Client, Storage} from 'appwrite';

export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('674bb3a600312f490497')



export const storage = new Storage(client);