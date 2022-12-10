import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeIndex from "@/pages/Home/HomeIndex";
import SearIndex from "@/pages/Search/SearIndex";
import LoginIndex from "@/pages/Login/LoginIndex";
import RegiIndex from "@/pages/Register/RegiIndex";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeIndex
  },
  {
    path: '/search',
    name: 'Search',
    component: SearIndex
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginIndex
  },
  {
    path: '/register',
    name: 'Register',
    component: RegiIndex
  },

  // 重定向
  {
    path: '*',
    redirect: '/home'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
