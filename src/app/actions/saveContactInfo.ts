'use server';

import { connectToDatabase } from '@/lib/mongodb';
import { ContactMessage } from '@/types/contactMessage';
import { Geolocation } from '@/types/geolocation';
import { Filter } from 'bad-words';

export default async function saveContactInfoToDB(
  formData: FormData,
  geolocation: Geolocation | null
) {
  try {
    const { db } = await connectToDatabase();

    const filter = new Filter();

    const contactInfo = await db.createCollection('contactInfo');

    const messageObj = Object.fromEntries(formData.entries()) as ContactMessage;

    const containsBadWord = filter.isProfane(messageObj.message);

    if (!containsBadWord)
      await contactInfo.insertOne({
        ...messageObj,
        location: geolocation,
        submittedOn: new Date(),
      });

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
