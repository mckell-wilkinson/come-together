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
      return blogs;
    }
  },
  methods: {
    //this will add the next ten blogs on click of more blogs button
    moreBlogs(n) {
      let blogPostsNew = this.$store.state.blogPosts;
      let blogsNew = blogPostsNew.slice(0, n + 10);
      let blogList = document.getElementById("blog-list");

      for (n; n < blogsNew.length; n++) {
        blogList.insertAdjacentHTML(
          "beforeend",
          `
      
        <img src="${blogsNew[n].thumbnail}">
        <a href="">${blogsNew[n].title}</a>
        <p>${blogsNew[n].description}</p>  
        
      `
        );
      }
      this.blogIncrementer = this.blogIncrementer + 10;
    }
  }
};
</script>
