<template>
  <div>
    <Header />
    <div class="content fade-in">
      <div class="contact">
        <h1>Whatever the reason is drop a line here:</h1>

        <ul>
          <li>
            <img src="/img/assets/instagram-black.svg" data-not-lazy />
            <p class="bold">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/cometogethercollective/"
                >@ComeTogetherCollective</a
              >
            </p>
          </li>

          <li>
            <img src="/img/assets/facebook.svg" data-not-lazy />
            <p class="bold">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com/Come-Together-Collective-110538887071305/"
                >@ComeTogetherManchester</a
              >
            </p>
          </li>
        </ul>
        <form name="contact" method="post" action="contact/thanks" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <label for="name">
            Name
          </label>
          <input name="name" type="text" />
          <label for="email">
            Your email
          </label>
          <input name="email" type="email" />
          <label for="body">
            Message
          </label>
          <textarea name="message" type="textarea"></textarea>
          <button type="submit">Send</button>
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

p {
  font-size: 0.8em;
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

li {
  list-style-type: none;
}

img {
  width: 30px;
  margin-right: 0.7em;
}

li > img,
li > p {
  display: inline;
}

li {
  display: flex;
  padding: 1em 0;
  border-top: solid 1px rgb(220, 220, 220);
}

li:nth-child(2) {
  border-bottom: solid 1px rgb(220, 220, 220);
}
ul {
  margin-bottom: 4em;
}

@media only screen and (min-width: 1024px) {
  .contact {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
