import dotenv from 'dotenv'; // by default gatsby will surface any env variables that begin with GATSBY_

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `slicks slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton',
    twitter: '@slicksSlices',
  },
  // plugins are npm installed and added in the package json
  plugins: [
    // providing name only will accept all the defaults
    'gatsby-plugin-styled-components',
    // if settings need to be set on a plugin use object
    {
      // this is the name of the plugin being added
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'a7ig3jdd',
        dataset: 'production',
        // overlayDrafts: true,
        // in dev when change is made in CMS & change is saved it will automatically be changed in gatsby site with no need for re-build
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
