<template>
  <div>
    <Header />
    <div class="content">
      <div class="blog">
      <ul id="blog-list">
        <!-- Limits number of blogposts displayed to three -->
        <li
          class="blog-item fade-in"
          v-for="(blog, index) in blogPost"
          :key="index"
        >
          <div class="blog-content">
            <ul>
              <li class="blog-img">
                <img :src="blog.thumbnail" />
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
      <button
        id="more-blogs"
        class="more-blogs hide"
        @click="moreBlogs(blogIncrementer)"
      >
        More blogs
      </button>
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
  data() {
    return {
      //used to show next ten blogs on click of moreBlogs
      blogIncrementer: 10
    };
  },
  components: {
    Header,
    Footer,
    SideBarMenu,
    SideBarSocial
  },

  computed: {
    blogPost() {
      const blogPosts = this.$store.state.blogPosts;
      //below will show 10 blog posts - more blog posts added on click using function moreBlogs
      const blogs = blogPosts.slice(0, 10);

      return blogs;
    }
  },

  mounted() {
    //if more than 10 blogs show the more blogs button
    const blogs = this.$store.state.blogPosts;
    const blogButton = document.getElementById("more-blogs");

    if (blogs.length > 10) {
      blogButton.classList.remove("hide");
    }
  },

  methods: {
    //this will add the next ten blogs on click of more blogs button

    moreBlogs(n) {
      const blogPostsNew = this.$store.state.blogPosts;
      const blogsNew = blogPostsNew.slice(0, n + 10);
      const blogList = document.getElementById("blog-list");

      for (n; n < blogsNew.length; n++) {
        blogList.insertAdjacentHTML(
          "beforeend",
          `
         <li class="blog-item fade-in">
          <div class="blog-content">
            <ul>
              <li class="blog-img">
                <img src="${blogsNew[n].thumbnail}"/>
              </li>
              <li>
                <h4>
                  <a href="blog/${blogsNew[n].slug}">${blogsNew[n].title}</a>
                </h4>
                <p class="blog-description">${blogsNew[n].description}</p>
                <p class="blog-date">
                  ${new Date(blogsNew[n].date).toDateString()}
                </p>
              </li>
            </ul>
          </div>
        </li>
        
      `
        );
      }
      this.blogIncrementer = this.blogIncrementer + 10;

      //remove the more blogs button if all blogs are shown
      const blogTotal = document.querySelectorAll(".blog-item");

      if (blogPostsNew.length === blogTotal.length) {
        const blogButton = document.getElementById("more-blogs");
        blogButton.classList.add("hide");
      }
    }
  }
};
</script>
<style scoped>
.hide {
  display: none;
}

.more-blogs {
  background: none;
  border: none;
  cursor: pointer;
}

@media only screen and (min-width: 1024px) {
  .blog {
    width: 80%;
    margin: 0 auto;
  }
}

</style>
