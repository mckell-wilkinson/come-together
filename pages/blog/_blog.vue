<template>
  <div>
    <Header />
    <div class="content">
      <article class="blog fade-in">
        <h1 class="blog-title">{{ blogPost.title }}</h1>
        <img
          class="fade-in"
          :src="blogPost.thumbnail"
          :alt="`${blogPost.alt}`"
        />
        <div class="blog-body" v-html="$md.render(blogPost.body)" />
        <div class="addthis_inline_share_toolbox"></div>
      </article>

      <!-- SOCIAL SHARE  -->

      <div class="share-container">
        <h5>Please share:</h5>
        <div class="share-buttons">
          <!-- TWITTER -->
          <ShareNetwork
            network="Twitter"
            :url="`https://cometogethercollective.co.uk/${$route.fullPath}`"
            :title="`${blogPost.title}...${blogPost.description}`"
            hashtags="cometogether"
          >
            <img
              src="~/static/img/assets/twitter-blue.svg"
              alt=""
              class="share-icon twitter"
            />
          </ShareNetwork>
          <!-- FACEBOOK -->
          <ShareNetwork
            network="Facebook"
            :url="`https://cometogethercollective.co.uk/${$route.fullPath}`"
            :title="`${blogPost.title}...${blogPost.description}`"
            :description="`${blogPost.title}...${blogPost.description}`"
            :quote="`${blogPost.title}...${blogPost.description}`"
            hashtags="cometogether"
          >
            <img
              src="~/static/img/assets/facebook.png"
              alt=""
              class="share-icon facebook"
            />
          </ShareNetwork>

          <!-- PINTEREST  -->
          <ShareNetwork
            network="Pinterest"
            :url="`https://cometogethercollective.co.uk/${$route.fullPath}`"
            :title="`${blogPost.title}...${blogPost.description}`"
            :media="`${blogPost.thumbnail}`"
          >
            <img
              src="~/static/img/assets/pinterest.svg"
              alt=""
              class="share-icon pinterest"
            />
          </ShareNetwork>

          <!-- EMAIL  -->
          <ShareNetwork
            network="Email"
            :url="`https://cometogethercollective.co.uk/${$route.fullPath}`"
            :title="`${blogPost.title}...${blogPost.description}`"
            :description="`${blogPost.title}...${blogPost.description}`"
          >
            <img
              src="~/static/img/assets/mail.svg"
              alt=""
              class="share-icon email"
            />
          </ShareNetwork>

          <!-- SMS  -->
          <ShareNetwork
            network="SMS"
            :url="`https://cometogethercollective.co.uk/${$route.fullPath}`"
            :title="`${blogPost.title}...${blogPost.description}`"
            :description="`${blogPost.title}...${blogPost.description}`"
          >
            <img
              src="~/static/img/assets/smartphone.svg"
              alt=""
              class="share-icon sms"
            />
          </ShareNetwork>

          <!-- Whatsapp  -->
          <ShareNetwork
            network="WhatsApp"
            :url="`https://cometogethercollective.co.uk/${$route.fullPath}`"
            :title="`${blogPost.title}...${blogPost.description}`"
            :description="`${blogPost.title}...${blogPost.description}`"
          >
            <img
              src="~/static/img/assets/whatsapp.svg"
              alt=""
              class="share-icon whatsapp"
            />
          </ShareNetwork>
        </div>
      </div>

      
      <!-- AUTHORS  -->
      <div v-if="blogPost.author === 'Dan'" class="author">
        <div class="img-container">
          <img
            src="~/static/img/assets/dan-thumbnail.jpg"
            alt="Author of this article Dan"
          />
        </div>
        <div class="author-container">
          <h5>Written by Dan</h5>
          <p>Developer</p>
        </div>
      </div>
      <div v-else-if="blogPost.author === 'Ellie'" class="author">
        <div class="img-container">
          <img
            src="~/static/img/assets/ellie-thumbnail.jpg"
            alt="Author of this article Ellie"
          />
        </div>
        <div class="author-container">
          <h5>Written by Ellie</h5>
          <p>Visual Branding and Technical Director</p>
        </div>
      </div>
      <div v-else-if="blogPost.author === 'Lanks'" class="author">
        <div class="img-container">
          <img
            src="~/static/img/assets/laura-thumbnail.jpg"
            alt="Author of this article Lanks"
          />
        </div>
        <div class="author-container">
          <h5>Written by Lanks</h5>
          <p>Project Manager</p>
        </div>
      </div>
      <div v-else-if="blogPost.author === 'Roisin'" class="author">
        <div class="img-container">
          <img
            src="~/static/img/assets/roisin-thumbnail.jpg"
            alt="Author of this article Roisin"
          />
        </div>
        <div class="author-container">
          <h5>Written by Roisin</h5>
          <p>Creative and Media Manager</p>
        </div>
      </div>
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
  head() {
    return {
      title: `Come Together Collective | ${this.blogPost.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: `${this.blogPost.description}`
        }
      ]
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

.blog {
  margin-bottom: 2em;
}
.author {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2vw;
}

.author-container p,
.author-container h5 {
  margin: 0;
  padding: 0;
}

.author-container p {
  font-size: 0.7em;
  opacity: 0.7;
}

.author-container {
  margin: 0 0 0 0.5em;
}

.author > .img-container {
  width: 100px;
}

.author > .img-container > img {
  width: 100%;
  border-radius: 100%;
  margin: 0;
  padding: 0;
}

.share-container {
  margin-top: -1em;
  text-align: left;
}

.share-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  max-width: 700px;
}

.share-icon {
  width: 37px;
  cursor: pointer;
}

.share-icon.facebook,
.share-icon.pinterest,
.share-icon.sms,
.share-icon.email {
  width: 25px;
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
