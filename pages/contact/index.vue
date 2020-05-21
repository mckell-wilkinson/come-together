<template>
  <div>
    <Header />
    <div class="content fade-in">
      <div class="contact">
        <h1>Whatever the reason is drop a line here:</h1>
        <form name="contact" action="contact/thanks" netlify>
          <p>
            <label>Name* <input type="text" name="name" required/></label>
          </p>
          <p>
            <label>Email* <input type="email" name="email" required/></label>
          </p>
          <p>
            <label>Message* <textarea type="textarea" name="message" required/></label>
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
};
</script>

<style scoped>
h1 {
  text-align: left;
}

input,
textarea {
  border: none;
  border-bottom: solid 5px #222;
  background: #f6f2f1;
  margin: 1em 0;
  padding: 0.5em;
  font-size: 1em;
  font-family: "Montserrat", sans-serif;
  color: #E62F20;
 
}



input {
  height: 50px;
}

textarea {
  height: 300px;
}

.contact {
  margin-top: 6em;
}

@media only screen and (min-width: 1024px) {
  .contact {
    width: 60%;
    margin: 0 auto;
  }
}


</style>
