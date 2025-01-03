import { Db, MongoClient } from 'mongodb';

const DATABASE_URL = process.env.DATABASE_URL!;
const MONGODB_DB = process.env.MONGODB_DB!;
const MONGODB_DB_NON_PROD = process.env.MONGODB_DB_NON_PROD!;

const isProd = process.env.NODE_ENV === 'production';

let cachedClient: MongoClient;
let cachedDb: Db;

if (!DATABASE_URL) {
  throw new Error('MONGODB_URI is not defined');
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(DATABASE_URL);

  const db = client.db(isProd ? MONGODB_DB : MONGODB_DB_NON_PROD);

  cachedClient = client;

  cachedDb = db;

  return { client, db };
}
