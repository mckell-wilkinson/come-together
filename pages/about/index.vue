<template>
  <div>
    <Header />
    <div class="content fade-in">
      <div class="about">
        <ul class="about-intro">
          <li><h1>About</h1></li>
          <li>
            <p class="bold">
              
                We are an arts and community events collective based in
                Chorlton, Manchester. Our mission is to offer a platform to
                artists and performers to exhibit their work while bringing
                people together to share temporary creative spaces.
            
            </p>
            <p>
              Our DIY events see residential homes and local venues undergo
              metamorphosis into cinemas, galleries and concert halls that come
              down as quickly as they go up. We create one-night-only
              experiences and invite folks in to be present with the art and
              with one another. Community connections are central to our work
              and we aim to be a part of making our community a creative,
              engaged and supportive one. We are an open door collective and
              welcome everyone to get involved and collaborate with us, from
              artists looking for their first chance to exhibit to local
              charities and other events organisers. So have a little look
              around, meet the team and see what we’ve been up to so far.
            </p>
            <p>
              Say hello, <nuxt-link to="/contact">get in touch</nuxt-link> and
              we’ll see you soon.
            </p>
          </li>
        </ul>
        <ul class="meet-team">
          <li v-for="(people, index) in people" :key="index">
            <div class="person">
              <h3>{{ people.name }}</h3>
              <p>{{ people.title }}</p>
              <img class="fade-in" :src="people.image" :alt="people.name" />
            </div>
          </li>
        </ul>
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
  head() {
    return {
      title: `Come Together Collective | About`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We are an arts and community events collective based in Chorlton, Manchester"
        }
      ],
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  components: {
    Header,
    Footer,
    sidebar,
    sidebarSocial
  },
  computed: {
    people() {
      let people = this.$store.state.about;
      return people;
    }
  }
};
</script>

<style scoped>

.bold {
  font-weight: bold;
}

li {
  list-style-type: none;
}

h1 {
  margin: 3em 0 1em;
}

p {
  margin: 0 0 1em;
}

.meet-team {
  margin-top: 3em;
}

.meet-team > li {
  margin: 3em auto;
}

@media only screen and (min-width: 1024px) {
  .about-intro {
    display: flex;
    justify-content: space-between;
  }

  .about-intro > ul > li {
    width: 50%;
  }

  .about-intro > li:nth-child(odd) {
    padding-right: 4em;
  }

  h1 {
    text-align: right;
    font-size: 1.4em;
  }

  p {
    font-size: 0.7em;
  }

  .meet-team > li {
    margin: 0 0 1.5em;
    padding: 0 1em;
    width: 50%;
    display: inline-flex;
  }

  .meet-team > li:nth-child(4n-7) {
    transform: translateX(50px);
  }

  .meet-team > li:nth-child(4n-6) {
    transform: translateX(50px);
  }

  .person > p {
    font-size: 0.6em;
  }
}

@media only screen and (min-width: 1024px) {
  .about {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
