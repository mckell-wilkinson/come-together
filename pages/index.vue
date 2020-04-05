<template>
  <div class="container">
    <div>
      <logo />
  <ul>
    <li v-for="(blog, index) in blogList"
      :key="index"> {{blog}}</li>
  </ul>
      
    
      <h2 class="subtitle">
        Come Together website
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documenta
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'



//Netlify identity widget

// pages/index.vue
import blogs from '~/content/blogs.json'
 
export default {
      components: {
    Logo
  },
    head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData({ app }) {
    async function awaitImport(blog) {
      const wholeMD = await import(`~/content/blog/${blog.slug}.md`)
      return {
        attributes: wholeMD.attributes,
        link: blog.slug
      }
    }
 
    const blogList = await Promise.all(
      blogs.map(blog => awaitImport(blog))
    ).then(res => {
      return {
        blogList: res
      }
    })
 
    return blogList
  }
}


</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
