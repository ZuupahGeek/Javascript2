import axios from 'axios'

export default {
  state: {
    posts: [],
    post: null,
    searchVal: ''
  },

  getters: {
    posts: state => state.posts,
    post: state => state.post,
    filteredPosts: state => {
      return state.posts.filter(post => post.title.toLowerCase().match(state.searchVal.toLowerCase()))
    },
    searchValue: state => state.searchVal
  },

  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts
    },
    SET_POST: (state, post) => {
      state.post = post
    },
    CLEAR_POST: state => state.post = null,
    SEARCH: (state, val) => {
      state.searchVal = val
    }
  },

  actions: {
    getPosts: async ({commit}) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('SET_POSTS', res.data)
    },
    getPost: async ({commit}, id) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      setTimeout(() => {
        commit('SET_POST', res.data)
      }, 2000)
      
    },
    clearPost: ([commit]) => {
      commit('CLEAR_POST')
    },
    search: ({commit}, val) => {
      commit('SEARCH', val)
    }
  },
}

