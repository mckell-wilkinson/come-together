<template>
  <div>
    <Header />
    <div class="content">
      <article class="blog fade-in">
        <h1 class="blog-title">{{ blogPost.title }}</h1>
        <img class="fade-in" :src="blogPost.thumbnail" :alt="`${blogPost.alt}`"/>
        <div class="blog-body" v-html="$md.render(blogPost.body)" />
        <div class="fb-comments" data-href="https://cometogethercollective.co.uk/" data-numposts="5" data-width=""></div>
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
  },
  beforeCreate: function() {
    const body = document.querySelector('body');
    
    body.insertAdjacentHTML('afterbegin', `
    <div id="fb-root"></div>
    `);
  },
  head() {
    return {
      title: `Come Together | ${this.blogPost.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: `${this.blogPost.description}`
        }
      ],
      script: [src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0&appId=365300597745691&autoLogAppEvents=1", async, defer, crossorigin="anonymous"]
    };
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
  .content {
    width: 60%;
    margin: 4em auto 0;
  }

  .blog > .blog-body > p {
    font-size: 0.7em !important;
  }
}
</style>
