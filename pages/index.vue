<template>
  <div>
    <Hero />
    <div class="content">
      <div class="insta">
        <h2>Art, music & community</h2>
        <p>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/cometogethercollective/"
            >Follow us on instagram</a
          >
          to be the first to hear about all our latest events, get involved in
          creating great art and become part of the Come Together Collective.
        </p>
        <ul class="insta-list">
          <li
            class="insta-image fade-in"
            v-for="(insta, index) in instaImages"
            :key="index"
          >
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/cometogethercollective/"
            >
              <img :src="insta" alt="Follow us on instagram" />
            </a>
          </li>
        </ul>
      </div>
      <h2><nuxt-link :to="`blog/`">Blogs</nuxt-link></h2>
      <ul id="blog-list">
        <!-- Limits number of blogposts displayed to three -->
        <li
          class="blog-item fade-in"
          v-for="(blog, index) in blogPost"
          :key="index"
        >
          <div class="blog-content">
            <ul>
              <li>
                <nuxt-link :to="`blog/${blog.slug}`"
                  ><img :src="blog.thumbnail"
                /></nuxt-link>
              </li>
              <li>
                <h4>
                  <nuxt-link :to="`blog/${blog.slug}`">{{
                    blog.title
                  }}</nuxt-link>
                </h4>
                <p class="blog-description">{{ blog.description }}</p>
                <p class="blog-date">
                  {{ new Date(blog.date).toDateString() }}
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <Footer />
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
    blogPost() {
      let blogPost = this.$store.state.blogPosts;
      //below will show three blog posts
      let blog = blogPost.slice(0, 4);
      return blog;
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
      title: `Come Together | Home`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We’re an art collective based in Manchester. Our main objective is, as the name suggests, to bring people together"
        }
      ],
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  mounted: function() {}
};
</script>

<style scoped>
.content {
  margin-top: 0;
}

p {
  color: #555;
  margin: 0 0 1em;
}

h2 {
  margin-bottom: 0.5em;
}
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

#blog-list {
  margin: 0;
}

.insta-list > li:nth-child(n + 7) {
  display: none;
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

  .insta-list > li:nth-child(n + 7) {
    display: block;
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
    background: linear-gradient(to bottom right, rgb(59, 59, 59), #000);
    color: #fff;
    position: relative;
    top: -100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    pointer-events: none;
  }
}

@media only screen and (min-width: 1024px) {
  .insta > p {
    font-size: 0.6em;
  }

  #blog-list {
    margin: 0;
  }

  #blog-list > li {
    width: 33%;
    display: inline-flex;
    margin: 2em auto 0;
  }

  #blog-list > li:nth-child(1) {
    margin: 0;
    padding: 0;
  }

  #blog-list > li:nth-child(2) {
    margin-top: 1em;
    padding: 0;
  }
  #blog-list > li:nth-child(3) {
    margin-top: 1em;
    padding: 0;
  }
  #blog-list > li:nth-child(4) {
    margin-top: 1em;
    padding: 0;
  }

  #blog-list > .blog-item > .blog-content > ul > .blog-img {
    margin-bottom: 0;
  }

  .blog-item:nth-child(3n + 1) > .blog-content {
    padding: 0 0 0 1em;
  }

  .blog-item:nth-child(3n + 2) > .blog-content {
    padding: 0 1em 0 0;
  }

  .blog-item:nth-child(3n + 3) > .blog-content {
    padding: 0 0.5em;
  }

  .blog-item:nth-child(1) > .blog-content {
    padding: 0;
    margin-top: 0;
  }

  .blog-item:nth-child(1) > .blog-content > ul > li:nth-child(1) {
    margin: 0 1em 0 0;
  }

  .blog-description {
    display: none;
  }

  .blog-date {
    margin: 0.5em 0 0;
  }

  #blog-list > li:nth-child(1) {
    width: 100%;
  }

  #blog-list > li:nth-child(1) > .blog-content > ul {
    display: inline-flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  #blog-list > li:nth-child(1) > .blog-content > ul > li:nth-child(1) {
    width: 60%;
    float: left;
  }

  #blog-list > li:nth-child(1) > .blog-content > ul > li:nth-child(2) {
    width: 35%;
  }

  #blog-list > li:nth-child(1) > .blog-content > ul > li > .blog-description {
    display: block;
    font-size: 0.6em;
  }
}
</style>
