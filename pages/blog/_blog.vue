<template>
  <div>
    <Header />
    <div class="content">
      <article class="blog fade-in">
        <h1 class="blog-title">{{ blogPost.title }}</h1>
        <img :src="blogPost.thumbnail" />
        <div v-html="$md.render(blogPost.body)" />
      </article>
    </div>
    <SideBarMenu />
    <SideBarSocial />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import SideBarMenu from "~/components/SidebarMenu.vue";
import SideBarSocial from "~/components/SidebarSocial.vue";

export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      };
  },
  components: {
    Header,
    Footer,
    SideBarMenu,
    SideBarSocial
  }
};
</script>

<style scoped>
h1.blog-title {
  text-align: left;
}

img {
  margin-bottom: 1em;
}

@media only screen and (min-width: 1024px) {
  .blog {
    width: 60%;
    margin: 0 auto;
  }
}

</style>
