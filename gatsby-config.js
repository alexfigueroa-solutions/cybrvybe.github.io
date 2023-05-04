module.exports = {
  pathPrefix: '/',
  flags: {
    THE_FLAG: false,
  },
  siteMetadata: {
    title: 'portfolio-two',
    siteUrl: `https://cybrvybe.github.io/`,
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass'),
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'google',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://gmail.us6.list-manage.com/subscribe/post?u=cab5323e0840ac15cbc21da54&amp;id=12af27c85f',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
