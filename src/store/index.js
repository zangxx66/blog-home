import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let httpUrl = 'http://127.0.0.1:666/api/'
// if (Object.is(process.env.NODE_ENV, 'production')) {
//   httpUrl = 'https://api.satania.app/api/'
// } else {
//   httpUrl = 'http://127.0.0.1:666/api/'
// }

console.log(process.env.NODE_ENV)

const store = new Vuex.Store({
  state: {
    reqUrl: httpUrl,
    valine: {
      appId: 'eTamsG6hG7F8qi2AkocJni1O-gzGzoHsz',
      appKey: 'hxtU74yORCHeCXBQBAye6XXj'
    }
  },
  mutations: {},
  getters: {
    getReqUrl: state => () => {
      return state.reqUrl
    },
    getValine: state => () => {
      return state.valine
    }
  }
})

export default store
