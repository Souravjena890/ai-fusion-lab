import connectToDatabase from '../../lib/mongodb';

export default async function handler(req, res) {
  await connectToDatabase();

  // Your DB logic here

  res.status(200).json({ message: 'Connected to MongoDB' });
}
