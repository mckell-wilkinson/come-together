<template>
  <div>
    <Header />
    <div class="test">Hello</div>
    <ul id="blog-list">
      <!-- Limits number of blogposts displayed to three -->
      <li class="blog-item" v-for="(blogPost, index) in blogPosts" :key="index">
        <img :src="blogPost.thumbnail" />
        <nuxt-link :to="`blog/${blogPost.slug}`">{{
          blogPost.title
        }}</nuxt-link>
        <p>{{ blogPost.description }}</p>
      </li>
    </ul>
    <button class="more-blogs" @click="moreBlogs(blogIncrementer)">
      More blogs +
    </button>
    <Footer />
  </div>
</template>
<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  data() {
    return {
      //used to show next ten blogs on click of moreBlogs
      blogIncrementer: 10
    };
  },
  components: {
    Header,
    Footer
  },
 
  
  computed: {
    blogPosts() {
      console.log('hello');
      let blogPosts = this.$store.state.blogPosts;
      console.log(blogPosts);
      //below will show 10 blog posts - more blog posts added on click using function moreBlogs
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
      <li class="blog-item">
        <img src="${blogsNew[n].thumbnail}">
        <a href="blog/${blogsNew[n].slug}">${blogsNew[n].title}</a>
        <p>b${blogsNew[n].description}</p>  
        </li>
        
      `
        );
      }
      this.blogIncrementer = this.blogIncrementer + 10;
    }
  }
};
</script>
<style scoped>


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
  }
}

.blog-item {
  animation: fadeIn 1s;
}

.more-blogs {
  background: none;
  border: none;
  cursor: pointer;
}

.test {
  color: red;
}

</style>


