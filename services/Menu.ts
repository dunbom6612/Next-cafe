import { Error } from './../model/Api';
import axios from 'axios';
import { connectDatabase, getAllDatas } from '../helpers/db-util';
import { MenuItem } from './../model/Menu';
export const getMenuItems = async () => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    throw new Error('Connecting to the database failed!');
  }

  try {
    const res = await getAllDatas(client, 'next-cafe', 'menu-items', {
      _id: -1
    });
    return res;
  } catch (error) {
    throw new Error('Getting comments failed.');
  } finally {
    client.close();
  }
};
