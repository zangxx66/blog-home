// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'muse-ui/dist/muse-ui.css'
import Vue from 'vue'
import MuseUI from 'muse-ui'
import App from './App'
import router from './router'
import store from './store'
import Message from 'muse-ui-message'
import NPorgress from 'muse-ui-progress'
import VueBlu from 'vue-blu'
import Share from 'vue-social-share'

import 'typeface-roboto'
import 'material-icons/iconfont/material-icons.css'
import 'material-icons/css/material-icons.css'
import 'muse-ui-message/dist/muse-ui-message.css'
import 'muse-ui-progress/dist/muse-ui-progress.css'
import 'vue-blu/dist/css/vue-blu.min.css'
import 'vue-social-share/dist/client.css'

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(Message)
Vue.use(NPorgress,{
  color:'secondary',
  size:3
})
Vue.use(VueBlu)
Vue.use(Share)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
