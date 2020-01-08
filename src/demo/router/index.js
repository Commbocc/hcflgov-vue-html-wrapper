import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newsroom',
    name: 'Newsroom',
    component: () => import('../views/Newsroom.vue')
  },
  {
    path: '/news-article',
    name: 'News Article',
    component: () => import('../views/NewsArticle.vue')
  },
  {
    path: '/l3',
    name: 'Level 3',
    component: () => import('../views/L3.vue')
  },
  {
    path: '/l4',
    name: 'Level 4',
    component: () => import('../views/L4.vue')
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/Guide.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
