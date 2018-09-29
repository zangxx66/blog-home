import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../view/Home.vue')
const ArticleDetail = () => import('../view/ArticleDetail.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ArticleDetail/:id',
      name: 'ArticleDetail',
      component: ArticleDetail,
      props: {
        default:true
      }
    },
    {
      path:'*',
      name:'404',
      redirect:{name:'Home'}
    }
  ]
})
