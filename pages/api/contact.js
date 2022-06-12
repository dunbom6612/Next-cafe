import { connectDatabase } from '../../helpers/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, number } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !number ||
      number.trim() === ''
    ) {
      res.status(422).json({ number: 'Invalid input.' });
      return;
    }

    const newContact = {
      email,
      name,
      number
    };

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ number: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('contact').insertOne(newContact);
      newContact.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ number: 'Storing contact failed!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ number: 'Successfully stored contact!', number: newContact });
  }
}

export default handler;
