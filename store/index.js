export const state = () => ({
  blogPosts: [],
  eventPosts: [],
  insta: [
    "/img/assets/img-1.jpg",
    "/img/assets/img-2.jpg",
    "/img/assets/img-3.jpg",
    "/img/assets/img-4.jpg",
    "/img/assets/img-5.jpg",
    "/img/assets/img-6.jpg",
    "/img/assets/img-7.jpg",
    "/img/assets/img-8.jpg",
    "/img/assets/img-9.jpg"
  ],

  about: [
    {
      name: "Roisin",
      title: "Creative and Media Manager",
      image: "/img/assets/roisin.png"
    },
    {
      name: "Ellie",
      title: "Visual Branding and Technical Director",
      image: "/img/assets/ellie.png"
    },
    {
      name: "Laura 'Lanks'",
      title: "Project Manager",
      image: "/img/assets/lanks.png"
    },
    {
      name: "Rowan",
      title: "Artistic Consultant",
      image: "/img/assets/rowan.png"
    },
    {
      name: "Molly",
      title: "Music Director",
      image: "/img/assets/molly.png"
    },
    {
      name: "Yasmin",
      title: "Educational Lead and Tehcnical Assitant",
      image: "/img/assets/yasmin.png"
    }
  ]
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setEventPosts(state, list) {
    state.eventPosts = list;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      "~/assets/content/blog/",
      false,
      /\.json$/
    );

    let eventFiles = await require.context(
      "~/assets/content/event/",
      false,
      /\.json$/
    );

    console.log(eventFiles);

    if (files.keys == "[Function: webpackContextKeys]") {
      let blogPosts = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        return res;
      });

      blogPosts.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      await commit("setBlogPosts", blogPosts);
    }

    if (eventFiles.keys == "[Function: webpackContextKeys]") {

      let eventPosts = eventFiles.keys().map(key => {
        let result = eventFiles(key);
        result.slug = key.slice(2, -5);
        return result;
      });
  
          //sort soonest event first
    eventPosts.sort(function(a, b) {
      return new Date(a.eventdate) - new Date(b.eventdate);
    });

    await commit("setEventPosts", eventPosts);

    }




    //sort newest published first

 


  }
};
