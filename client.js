import sanityClient from '@sanity/client';

const configuredSanityClient = sanityClient({
  projectId: 'cdjbyqga', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});

export default configuredSanityClient;
