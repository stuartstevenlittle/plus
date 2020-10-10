import dotenv from 'dotenv'
dotenv.config({ path: '.env' })
export default {
  siteMetadata: {
    title: 'PLUS Perth',
    siteUrl: 'http://plusperth.co.uk/',
    description: 'PLUS Perth',
    twitter: `@PLUS_Perth`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss`,
      options: { postCssPlugins: [require(`tailwindcss`)] }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { printRejected: false, develop: false, tailwind: true }
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
