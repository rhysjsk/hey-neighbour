import Vue from 'vue'
import Router from 'vue-router'
import Noise from '@/components/Noise'
import Trees from '@/components/Trees'
import Animals from '@/components/Animals'
import Terms from '@/components/Terms'
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
    },
    {
      path: '/trees',
      name: 'Trees',
      component: Trees
    },
    {
      path: '/animals',
      name: 'Animals',
      component: Animals
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    }
  ]
})
