/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Ardent Phnom Penh",
    description:
      "Coming soon",
    url: "https://instagram.com/ardent.phnompenh", // No trailing slash allowed!
    image: "./images/ardent-logo-01.png", // Path to your image you placed in the 'static' folder
    instagramTag: "@ardent.phnompenh"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ardent Phnom Penh`,
        short_name: `Ardent`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `./favicon.png`
      },
    },
    `gatsby-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
