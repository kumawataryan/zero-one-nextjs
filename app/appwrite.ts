import { Client, Account } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('67a89e0d0032f7d13382'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
