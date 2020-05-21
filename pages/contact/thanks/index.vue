<template>
<div>
    <Header />
<div class="content">
    <div class="thanks">
        <h1>Thanks for getting in touch</h1>
        <p>We'll be in touch soon 😃</p>
        </div> 
</div>
<sidebar />
<sidebarSocial />
<Footer />
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
  }
};

</script>


<style scoped>

footer {
    position: absolute;
    bottom: 0;
}

body {
        height: 100vh;
}

h1 {
    text-align: left;
}

.thanks {
    margin-top: 6em;
}

@media only screen and (min-width: 1024px) {
  .thanks {
    width: 60%;
    margin: 0 auto;
  }
}

</style>