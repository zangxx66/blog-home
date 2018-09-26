import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let httpUrl = ''
if (Object.is(process.env.NODE_ENV, 'production')) {
  httpUrl = 'http://127.0.0.1:666/api/'
} else {
  httpUrl = 'http://localhost:5000/api/'
}

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
