module.exports = {
  siteMetadata: {
    title: "Zarin / Barrett-Wilsdon Wedding",
    author: "Taylor Barrett-Wilsdon",
    description: "The marriage of Taylor Barrett-Wilsdon & Mileen Zarin"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass'
    ],
}
