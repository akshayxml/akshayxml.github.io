require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Akshay M | akshayxml",
    author: "Akshay",
    description: "Akshay M's internet real estate",
    url: "https://akshayxml.github.io",
    image: "/images/favicon.png",
    twitterUsername: "@akshayxml",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Akshay M | akshayxml',
        short_name: 'akshayxml',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        disable: true,
        // devMode: true
      },
    }
  ]
}
