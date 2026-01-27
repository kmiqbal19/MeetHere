'use server';

import connectDB from '@/lib/mongodb';
import Message from '@/database/message.model';

export async function submitContact(formData: FormData) {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!email || !message) {
    throw new Error('Missing fields');
  }

  await connectDB();

  await Message.create({
    email,
    message,
  });

  return { success: true };
}
