<template>
<div>
    <Header />
    <div class="content fade-in">
        <div class="contact">
<form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
    <p>
    <label>Message <textarea type="textarea" name="message" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
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
}
</script>