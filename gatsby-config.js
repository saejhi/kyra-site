/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Kyra Buenviaje`,
    description: `Personal website of Kyra Gabrielle Buenviaje: fashion designer.`,
    author: `@lockjio`,
    siteUrl: `https://kyrabuenviaje.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `kyra-site`,
    //     short_name: `kyra`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#ffffff`,
    //     display: `minimal-ui`,
    //     icon: `src/favicon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-favicon`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    //     trackingId: "UA-150731209-1",
    //   },
    // },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-offline`,
  ],
}
