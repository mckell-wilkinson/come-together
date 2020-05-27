<template>
<div>
    <Header />

  <div class="content">
    <h1 v-if="error.statusCode === 404">Oooops...<br/>sorry page not found</h1>
    <h1 v-else>Sorry an error occurred</h1>
    <nuxt-link to="/">Take me home</nuxt-link>
  </div>

  <Footer />
    <sidebar />
  <sidebarSocial />
  </div>
</template>

<script>

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import sidebar from "~/components/SidebarMenu";
import sidebarSocial from "~/components/SidebarSocial";

export default {

      components: {
    Header,
    Footer,
    sidebar,
    sidebarSocial
  },
  props: ['error']
//   layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style scoped>

body {
    min-height: 100vh;
}

footer {
    position: absolute;
    bottom: 0;
}

@media only screen and (min-width: 1024px) {
.content {
    width: 60%;
}
}
    



</style>