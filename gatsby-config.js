module.exports = {
  siteMetadata: {
    title: "isilive-test",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
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
        icon: "src/images/icon.png",
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
