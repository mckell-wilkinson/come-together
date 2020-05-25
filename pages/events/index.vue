<template>
  <div>
    <Header />
    <div class="content">
      <div class="event">
        <div v-if="event.length > 0">
          <ul id="event-list">
            <!-- Limits number of eventposts displayed to three -->
            <li
              class="event-item fade-in"
              v-for="(event, index) in eventPost"
              :key="index"
            >
              <div class="event-content">
                <ul>
                  <li class="event-img">
                    <a :href="`${event.url}`"><img :src="event.thumbnail"/></a>
                  </li>
                  <li>
                    <h4>
                      <a
                        :href="`${event.url}`"
                        target="_blank"
                        rel="noreferrer noopener"
                        >{{ event.title }}</a
                      >
                    </h4>

                    <p class="event-date">
                      {{ event.location }},
                      {{ new Date(event.eventdate).toDateString() }} at
                      {{
                        new Date(event.eventdate).toLocaleTimeString([], {
                          timeStyle: "short"
                        })
                      }}
                    </p>
                    <p class="event-description">{{ event.description }}</p>
                    <p>
                      <a
                        :href="`${event.url}`"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="button"
                        >Get your tickets</a
                      >
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div v-else>
          <h2>
            Sorry we don't have any events on at the moment! Please check back
            soon.
          </h2>
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
  data() {
    return {
      //used to show next ten events on click of moreevents
      event: this.$store.state.eventPosts
    };
  },

  head() {
    return {
      title: `Come Together | Events`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Check out our latest events for the best local talent and fun times"
        }
      ]
    };
  },
  components: {
    Header,
    Footer,
    SideBarMenu,
    SideBarSocial
  },

  computed: {
    eventPost() {
      const eventPosts = this.$store.state.eventPosts;
      return eventPosts;
    }
  }
};
</script>
<style scoped>
body {
  height: 100vh;
}

ul {
  list-style-type: none;
}

.event-date {
  color: #555;
}

p {
  margin: 0.5em 0;
}

.event-item {
  margin-bottom: 6em;
}

.event-description {
  margin-bottom: 3em;
}

@media only screen and (min-width: 1024px) {
  .event {
    width: 60%;
    margin: 0 auto;
  }

  .event-description {
    margin-bottom: 1.5em;
  }
}
</style>
