import { connectDatabase, getAllDatas } from '../helpers/db-util';
export const getMenuItems = async () => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log('error', error);

    throw new Error('Connecting to the database failed!');
  }

  try {
    const res = await getAllDatas(client, 'menu-items', {
      _id: -1
    });
    return res;
  } catch (error) {
    throw new Error('Getting comments failed.');
  } finally {
    client.close();
  }
};
