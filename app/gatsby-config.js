const path = require('path');
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
module.exports = {
  siteMetadata: {
    title: 'PLUS Perth',
    siteUrl: 'http://plusperth.co.uk/',
    description: 'PLUS Perth',
    twitter: `PLUS_Perth`,
    facebook: `PlusPerth-1514503322206433`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    { resolve: 'gatsby-source-filesystem', options: { name: 'images', path: path.join(__dirname, `images`) } },
    // { resolve: 'gatsby-source-filesystem', options: { name: 'images', path: `images` } },
    { resolve: `gatsby-plugin-postcss`, options: { postCssPlugins: [require(`tailwindcss`)] } },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { printRejected: false, develop: false, tailwind: true, ignore: ['swiper.css', 'main.css'] }
    },
    {
      resolve: `gatsby-plugin-google-fonts`, options: { fonts: [`lato\:300,400,700`], display: 'swap' }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: { projectId: 'ob7gy76r', dataset: 'production', watchMode: true, token: process.env.SANITY_TOKEN }
    },

  ],
}
