import {Client, Account, Avatars} from 'react-native-appwrite';

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('680cb0d400273793534b')
    .setPlatform('dev.habeeb.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
