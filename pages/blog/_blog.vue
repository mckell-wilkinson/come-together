<template>
  <article>
    <h1>{{blogPost.title}}</h1>
    <img :src="blogPost.thumbnail">
    <div v-html="$md.render(blogPost.body)" />
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
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
}
</script>