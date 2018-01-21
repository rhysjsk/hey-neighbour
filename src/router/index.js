import Vue from 'vue'
import Router from 'vue-router'
import Noise from '@/components/Noise'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/noise',
      name: 'Noise',
      component: Noise
    }
  ]
})
