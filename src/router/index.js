import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import User from 'components/user/user'
import Video from 'components/video/video'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    }
  ]
})
