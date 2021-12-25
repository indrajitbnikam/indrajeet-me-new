import client from '../client';

const blogDataModel =
  '{ title, desc, img, date, url, tags[]->{name}, author->{ name } }';

const projectDataModel =
  '{ title, desc, img, date, repo, demo, tags[]->{name} }';

export const getAllBlogs = async () =>
  client.fetch(`*[_type == "blog"] | order(date desc)  ${blogDataModel}`);

export const getFirstNBlogs = async (n: number = 3) =>
  client.fetch(
    `*[_type == "blog"] | order(date desc)[0...${n}] ${blogDataModel}`
  );

export const getAllProjects = async () =>
  client.fetch(`*[_type == "project"] | order(date desc) ${projectDataModel}`);

export const getFirstNProjects = async (n: number = 3) =>
  client.fetch(
    `*[_type == "project"] | order(date desc)[0...${n}] ${projectDataModel}`
  );
