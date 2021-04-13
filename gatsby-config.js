module.exports = {
  siteMetadata: {
    title: "Our Day",
    titleTemplate: "Our Day",
    description: "Wedding livestreaming and webcasting for remote events.  We are here to help you turn your day into ourday!",
    url: "http://www.ourday.ca",
  },
  plugins: [
    "react-icons",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          // "Roboto",
          // "source sans serif\:300,400,400,700", 
          "Unna",
          "serif\:400,400i,700", 
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-scroll-reveal",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/public/static/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-nprogress",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Our Day",
        short_name: "Our Day",
        start_url: "/",
        background_color: "#EFF1F2",
        theme_color: "#AF9453",
        display: "fullscreen",
        icon: "src/images/gold-flower.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
