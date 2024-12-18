'use server';

import { connectToDatabase } from '@/lib/mongodb';

export default async function saveContactInfoToDB(formData: FormData) {
  const { db } = await connectToDatabase();

  const contactInfo = await db.createCollection('contactInfo');

  const messageObj = {
    firstName: formData.get('firstname'),
    lastName: formData.get('lastname'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
    submittedOn: new Date(),
  };

  await contactInfo.insertOne(messageObj);
}
