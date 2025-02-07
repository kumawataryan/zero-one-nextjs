import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

const MONGO_URI = process.env.MONGO_URI; // Add your MongoDB URI to .env.local

if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable in .env.local');
}

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = await MongoClient.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = client.db(); // Defaults to the database in the URI
    cachedClient = client;
    cachedDb = db;

    return { client, db };
}
