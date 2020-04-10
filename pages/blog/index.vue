<template>
  <div>
    <ul id="blog-list">
      <!-- Limits number of blogposts displayed to three -->
      <li v-for="(blogPost, index) in blogPosts" :key="index">
        <img :src="blogPost.thumbnail" />
        <nuxt-link :to="`blog/${blogPost.slug}`">{{
          blogPost.title
        }}</nuxt-link>
        <p>{{ blogPost.description }}</p>
      </li>
    </ul>
    <button v-on:click="moreBlogs(blogIncrementer)">More blogs</button>

    {{ blogIncrementer }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogIncrementer: 10
    };
  },
  computed: {
    blogPosts() {
      let blogPosts = this.$store.state.blogPosts;
      //below will show three blog posts
      let blogs = blogPosts.slice(0, 10);
      console.log(blogs);
      return blogs;
    }
  },
  methods: {
    moreBlogs(n) {

      let blogPosts = this.$store.state.blogPosts;
      let blogs = blogPosts.slice(0, n);
      let blogList = document.getElementById("blog-list");

      for (let i = 3; i < blogs.length; i++) {
        blogList.insertAdjacentHTML(
          "beforeend",
          `
      
        <img src="${blogs[i].thumbnail}">
        <a href="">${blogs[i].title}</a>
        <p>${blogs[i].description}</p>  
        
      `
        );
      }
      this.blogIncrementer = this.blogIncrementer + 10;
      console.log(blogs)
      return blogs;
    }
  },

};
</script>
