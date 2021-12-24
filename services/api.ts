import client from '../client';

export const getAllBlogs = async () =>
  client.fetch('*[_type == "blog"] | order(date desc)');

export const getFirstNBlogs = async (n: number = 3) =>
  client.fetch(`*[_type == "blog"] | order(date desc)[0...${n}]`);
