export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { property: 'og:image', content: "/static/img/assets/og-img.jpg" || '' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "//wpcc.io/lib/1.0.2/cookieconsent.min.css"
      }
    ],
    script: [
      {src:"//wpcc.io/lib/1.0.2/cookieconsent.min.js"},
      {src:"/script/index.js"},
      {src:"https://www.googletagmanager.com/gtag/js?id=UA-167450671-1"}
    ]
  },
  generate: {
    subFolders: false,
    fallback: true,

    routes: function() {
      const fs = require("fs");
      const path = require("path");
      return fs.readdirSync("./assets/content/blog").map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        };
      });
    }
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
  modules: ["@nuxtjs/markdownit", 'nuxt-lazy-load', 'vue-social-sharing/nuxt'],
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
