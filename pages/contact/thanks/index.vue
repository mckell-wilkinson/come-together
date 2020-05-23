<template>
<div>
    <Header />
<div class="content">
    <div class="thanks">
        <h1>Thanks for getting in touch</h1>
        <p>We'll be in touch soon 😃</p>
        </div> 
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
      head() {
    return {
      title: `Come Together | Thanks for getting in touch`,
      meta: [

        {
          hid: "description",
          name: "description",
          content:
            "Thanks for getting in touch"
        }
      ]
    };
  },
};

</script>


<style scoped>

footer {
  margin-top: 60vh;
}

h1 {
    text-align: left;
}

@media only screen and (min-width: 1024px) {
  .thanks {
    width: 60%;
    margin: 0 auto;
  }
}

</style>