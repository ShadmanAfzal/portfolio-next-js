'use server';

import { connectToDatabase } from '@/lib/mongodb';

export default async function saveContactInfoToDB(formData: FormData) {
  try {
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

    return {
      success: true,
      message: 'I will get back to you as soon as possible.',
    };
  } catch (error) {
    console.log('Error occured while saving contact info to database', error);
    return {
      success: false,
      message: 'Oops! Something went wrong. Please try again later.',
    };
  }
}
