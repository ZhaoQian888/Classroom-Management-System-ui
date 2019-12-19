import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'lgoin',
    component: Login,
  },
  {
    path: '/',
    name: 'home',
    component:Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path:'/classroom',
    name:'classroom',
    component: () => import(/* webpackChunkName: "about" */ './views/ClassRoom.vue')
  
  },
  {
    path:'/roomregister',
    name:'roomregister',
    component: () => import(/* webpackChunkName: "about" */ './views/RoomRegister.vue')
  
  },
  {
    path:'/registerinfo',
    name:'registerinfo',
    component: () => import(/* webpackChunkName: "about" */ './views/RegisterInfo.vue')
  
  },
  {
    path:'/information',
    name:'information',
    component: () => import(/* webpackChunkName: "about" */ './views/MyInformation.vue')
  
  },
  {
    path:'/register',
    name:'register',
    component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
  
  },
]

const router = new VueRouter({
  routes
})

export default router
