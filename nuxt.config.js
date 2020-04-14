

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  generate: {
    subFolders: false,
    fallback: true,

    // routes: function() {
    //   console.log()
    //   const fs = require("fs");
    //   let blogRoutes = fs.readdirSync("./assets/content/blog").map(file => {
    //     return `"/blog/${file.slice(0, -5)}"`
    //   });
    //   return `[${blogRoutes}, "/events", "/about", "/blog"]`
    // },
    routes: ["/blog/2020-04-11-blog-2", "/blog/2020-04-11-blog-3", "/blog/2020-04-11-blog", "/events", "/about", "/blog"],
   
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/markdownit"],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
