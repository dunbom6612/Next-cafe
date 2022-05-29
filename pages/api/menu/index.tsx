import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase, getAllDatas } from "../../../helpers/db-util";
import { Error } from "../../../model/Api";
import { MenuItem } from "../../../model/Menu";


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  if (req.method === 'GET') {
    try {
      const items = await getAllDatas(client, 'next-cafe', 'menu-items', { _id: -1 });
      res.status(200).json({ menuItems: items });
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed.' });
    }
  }

  client.close();
}

export default handler;