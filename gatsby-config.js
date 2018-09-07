module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          baseUrl: `46.101.251.228/nostalgia-1`,
          protocol: `http`,
          hostingWPCOM: false,
          verboseOutput: true,
          useACF: true,
      },
    },
  ],
}
