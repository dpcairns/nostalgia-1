module.exports = {
  siteMetadata: {
    title: 'Nostalgia Site 1',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          baseUrl: `46.101.251.228/nostalgia-1/index.php`,
          protocol: `http`,
          hostingWPCOM: false,
          verboseOutput: true,
          useACF: true,
      },
    },
  ],
}
