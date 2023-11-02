'use server';

import User from '@/database/user.model';
import { connectToDatabase } from '../mongoose';
import { GetTopInteractedTagsParams } from './shared.types';

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    await connectToDatabase();

    const { userId } = params;
    console.log(userId);

    const user = await User.findById(userId);

    if (!user) throw new Error('user not found');

    // find the interactions for the user and  group by tags...
    // interaction db...

    return [
      { _id: '1', name: 'tag' },
      { _id: '2', name: 'tag2' },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
