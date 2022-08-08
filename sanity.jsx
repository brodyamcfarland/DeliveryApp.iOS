import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'jdeww99a',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// cd into sanitydelivery and type: 'sanity cors add http://localhost:3000' to add server policy

export default client;