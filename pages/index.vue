<template>
  <div>
<Header />
    <ul>
      
      <!-- Limits number of blogposts displayed to three -->
        <li v-for="(blogPost, index) in blogPosts" :key="index"> 
          <img :src="blogPost.thumbnail">
        <nuxt-link :to="`blog/${blogPost.slug}`">{{blogPost.title}}</nuxt-link>
        <p>{{ blogPost.description }}</p>    

      </li>

     
    </ul>
    <Footer />
  </div>

  
</template>

<script>

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";


export default {

    data() {
    return {
      index: 0,
    
    };
  },
  components: {
    Header,
    Footer
    
  },
  //pulls through blogposts
  computed: {
    blogPosts() {
      let blogPosts = this.$store.state.blogPosts;
      //below will show three blog posts
      let blogs = blogPosts.slice(0,3);
      return blogs;
    },


  },


  methods: {

    //used to limit number of blogposts
    incrementInd(n) {
      return n++
    }
  },

  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  mounted: function() {


    
  }
};

</script>

<style>

.hide {
  display: none;
}
</style>