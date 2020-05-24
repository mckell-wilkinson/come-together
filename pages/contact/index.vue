<template>
  <div>
    <Header />
    <div class="content fade-in">
      <div class="contact">
        <h1>Whatever the reason is drop a line here:</h1>
        <form name="contact" action="contact/thanks" netlify>
          <p>
            <label>Name<input type="text" name="person"/></label>
          </p>
          <p>
            <label>Your email<input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message<textarea type="textarea" name="message"/></label>
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
  },

  head() {
    return {
      title: `Come Together | Contact`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Get in touch with us at Come Together to get involved or suggest an event"
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  text-align: left;
  margin: 0 0 2em;
  padding: 0;
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
  color: #e62f20;
}

input {
  height: 50px;
}

textarea {
  height: 300px;
}

@media only screen and (min-width: 1024px) {
  .contact {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
