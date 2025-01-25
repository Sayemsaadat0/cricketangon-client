'use server';

import { revalidateTag } from 'next/cache';

export const revalidateHomePage = async () => {
  revalidateTag('homePage');
};
