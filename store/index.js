export const state = () => ({
  blogPosts: [],
  insta: [
    "/img/assets/img-1.jpg",
    "/img/assets/img-2.jpg",
    "/img/assets/img-3.jpg",
    "/img/assets/img-4.jpg",
    "/img/assets/img-5.jpg",
    "/img/assets/img-6.jpg",
    "/img/assets/img-7.jpg",
    "/img/assets/img-8.jpg",
    "/img/assets/img-9.jpg",
    "/img/assets/img-1.jpg",
    "/img/assets/img-2.jpg",
    "/img/assets/img-3.jpg"
  ]
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      "~/assets/content/blog/",
      false,
      /\.json$/
    );
    let blogPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit("setBlogPosts", blogPosts);
  }
};
