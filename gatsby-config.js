module.exports = {
  siteMetadata: {
    title: "Akshay M | akshayxml",
    author: "Akshay",
    description: "The space in the internet belonging to Akshay M",
    url: "https://akshayxml.github.io",
    image: "/images/favicon.png", // Path to your image you placed in the 'static' folder
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
    'gatsby-plugin-offline'
  ],
}
