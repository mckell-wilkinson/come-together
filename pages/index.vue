<template>
  <div>
    <Hero />
    <div class="content">
      <div class="insta">
          <h2>Art, music & community</h2>
        <ul>
          <li data-aos="fade-up"
            class="insta-image"
            v-for="(insta, index) in instaImages"
            :key="index"
          >
          <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/cometogethercollective/">
            <img :src="insta" />
          </a>
          </li>
        </ul>
      </div>
      <h2>Blogs</h2>
      <ul>
        <li v-for="(blogPost, index) in blogPosts" :key="index">
          <img :src="blogPost.thumbnail" />
          <nuxt-link :to="`blog/${blogPost.slug}`"
            ><h4>{{ blogPost.title }}</h4></nuxt-link
          >
          <p>{{ blogPost.description }}</p>
        </li>
      </ul>
    </div>

    <!-- <Footer /> -->
    <Sidebar />
    <SidebarSocial />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Sidebar from "~/components/SidebarMenu.vue";
import Hero from "~/components/Hero.vue";
import SidebarSocial from "~/components/SidebarSocial.vue";

export default {
  data() {
    return {
      index: 0
    };
  },
  components: {
    Footer,
    Sidebar,
    Hero,
    SidebarSocial
  },
  //pulls through blogposts
  computed: {
    blogPosts() {
      let blogPosts = this.$store.state.blogPosts;
      //below will show three blog posts
      let blogs = blogPosts.slice(0, 4);
      return blogs;
    },
    instaImages() {
      let insta = this.$store.state.insta;
      return insta;
    }
  },

  methods: {
    //used to limit number of blogposts
    incrementInd(n) {
      return n++;
    }
  },

  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  mounted: function() {}
};
</script>

<style scoped>
.insta {
  margin: 6em auto;
}

.insta > ul > li {
  margin: 1em auto;
  list-style-type: none;
}

.insta-image {
  cursor: pointer;
}


@media only screen and (min-width: 600px) {
  .insta > ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .insta > ul > li {
    height: 50vh;
    width: 50%;
    /* flex-grow: 1; */
    padding: 0.5em 0;
    margin: 0;
  }

  .insta > ul > li:nth-child(even) {
    padding: 0.5em 0 0.5em 0.5em;
  }

  .insta > ul > li:nth-child(odd) {
    padding: 0.5em 0.5em 0.5em 0;
  }

  li:last-child {
    flex-grow: 10;
  }

  .insta > ul > li > a > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    vertical-align: bottom;
    margin: 0;
    padding: 0;
  }
}

@media only screen and (min-width: 900px) {
  .insta > ul > li {
    width: 33.333%;
  }

  .insta > ul > li:nth-child(3n + 1) {
    padding: 0.5em 0.5em 0.5em 0;
  }

  .insta > ul > li:nth-child(3n + 2) {
    padding: 0.5em;
  }
  .insta > ul > li:nth-child(3n + 3) {
    padding: 0.5em 0 0.5em 0.5em;
  }
  
.insta-image:hover:after {
  content: url("~static/img/assets/instagram.svg");
  font-family: "Corben", cursive;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #E71D73, #E62F20);
  color: #fff;
  position: relative;
  top: -100%;
  text-align: center;
   display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  pointer-events: none;

}

}


</style>
