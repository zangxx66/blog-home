import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../view/Home.vue')
const ArticleDetail = () => import('../view/ArticleDetail.vue')
// const About = () => import('../view/About.vue')

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
    // {
    //   path:'/About',
    //   name:'About',
    //   component:About
    // },
    {
      path:'*',
      name:'404',
      redirect:{name:'Home'}
    }
  ]
})
