module.exports = {
  siteMetadata: {
    title: 'efi-amazon-fires',
  },
  pathPrefix: 'efi-amazon-fires',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images],
  ],
};
