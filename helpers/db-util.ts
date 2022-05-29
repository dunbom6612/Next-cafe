import { MenuItem } from './../model/Menu';
import { MongoClient, Sort } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://sa:1234@cluster0.2eeea.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
}

export async function getAllDatas(
  client: MongoClient,
  database: string,
  collection: string,
  sort: Sort
) {
  const db = client.db(database);

  const datas = await db.collection(collection).find().sort(sort).toArray();

  return datas;
}
