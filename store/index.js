export const state = () => ({
    blogPosts: [],
    insta: [
      "/img/img-1.jpg",
      "/img/img-2.jpg",
      "/img/img-3.jpg",
      "/img/img-4.jpg",
      "/img/img-5.jpg",
      "/img/img-6.jpg",
      "/img/img-7.jpg",
      "/img/img-8.jpg",
      "/img/img-9.jpg",
      "/img/img-1.jpg",
      "/img/img-2.jpg",
      "/img/img-3.jpg"
    ],

  })
  
  export const mutations = {
    setBlogPosts(state, list) {
      state.blogPosts = list
    }
  }
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let files = await require.context(
        '~/assets/content/blog/',
        false,
        /\.json$/
      )
      let blogPosts = files.keys().map(key => {
        let res = files(key)
        res.slug = key.slice(2, -5)
        return res
      })
      await commit('setBlogPosts', blogPosts)
    }
  }
