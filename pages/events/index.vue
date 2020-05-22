<template>
  <div>
    <Header />
    <div class="content">
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
                <img :src="event.thumbnail" />
              </li>
              <li>
                <h4>
                  <a :href="`${event.url}`" target="_blank" rel="noreferrer noopener">{{
                    event.title
                  }}</a>
                </h4>
                <p class="event-description">{{ event.description }}</p>
                <p class="event-date">
                  {{ new Date(event.eventdate).toDateString() }} at {{new Date(event.eventdate).toLocaleTimeString()}}
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>

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
      eventIncrementer: 10
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
      //below will show 10 event posts - more event posts added on click using function moreevents
      const events = eventPosts.slice(0, 10);

      return events;
    }
  },

  mounted() {
    //if more than 10 events show the more events button
    const events = this.$store.state.eventPosts;
    const eventButton = document.getElementById("more-events");

    if (events.length > 10) {
      eventButton.classList.remove("hide");
    }
  },

  methods: {
    //this will add the next ten events on click of more events button

    moreevents(n) {
      const eventPostsNew = this.$store.state.eventPosts;
      const eventsNew = eventPostsNew.slice(0, n + 10);
      const eventList = document.getElementById("event-list");

      for (n; n < eventsNew.length; n++) {
        eventList.insertAdjacentHTML(
          "beforeend",
          `
         <li class="event-item fade-in">
          <div class="event-content">
            <ul>
              <li class="event-img">
                <img src="${eventsNew[n].thumbnail}"/>
              </li>
              <li>
                <h4>
                  <a href="event/${eventsNew[n].slug}">${eventsNew[n].title}</a>
                </h4>
                <p class="event-description">${eventsNew[n].description}</p>
                <p class="event-date">
                  ${new Date(eventsNew[n].date).toDateString()}
                </p>
              </li>
            </ul>
          </div>
        </li>
        
      `
        );
      }
      this.eventIncrementer = this.eventIncrementer + 10;

      //remove the more events button if all events are shown
      const eventTotal = document.querySelectorAll(".event-item");

      if (eventPostsNew.length === eventTotal.length) {
        const eventButton = document.getElementById("more-events");
        eventButton.classList.add("hide");
      }
    }
  }
};
</script>
<style scoped>
.hide {
  display: none;
}

.more-events {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
