module.exports = {
  siteMetadata: {
    title: "Our Day",
    titleTemplate: "Our Day",
    description: "Event livestreaming and webcasting for all occasions.  We are here to help you turn your day into ourday!",
    keywords: "wedding, big event, celebration, recognition, achievement, graduation, birthday, anniversary, appreciation, party, vows, livestream, webcast, broadcast, milestone, event, speech, live address, formal, wedding webcast, wedding livestream, venue, wedding venue, livestream venue, webcast venue, videographers, party webcast", 
    url: "https://www.ourday.ca/",
    image: "/beach-altar.jpg",
    twitterUsername: "@iSiLIVE_Canada",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "react-icons",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
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
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
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
        start_url: ".",
        background_color: "#EFF1F2",
        theme_color: "#AF9453",
        display: "fullscreen",
        icon: "src/images/button.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
  ],
};
