import { MenuItem } from './../model/Menu';
import { MongoClient, Sort } from 'mongodb';

export async function connectDatabase() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.2eeea.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(connectionString);

  return client;
}

export async function getAllDatas(
  client: MongoClient,
  collection: string,
  sort: Sort
) {
  const db = client.db();

  const datas = await db.collection(collection).find().sort(sort).toArray();

  return datas;
}
