import { Db, MongoClient } from 'mongodb';

const DATABASE_URL = process.env.DATABASE_URL;
const MONGODB_DB = process.env.MONGODB_DB;

let cachedClient: MongoClient;
let cachedDb: Db;

if (!DATABASE_URL) {
  throw new Error('MONGODB_URI is not defined');
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(DATABASE_URL!);

  const db = client.db(MONGODB_DB);

  cachedClient = client;

  cachedDb = db;

  return { client, db };
}
