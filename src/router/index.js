import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeIndex from "@/pages/Home/HomeIndex";
import SearIndex from "@/pages/Search/SearIndex";
import LoginIndex from "@/pages/Login/LoginIndex";
import RegiIndex from "@/pages/Register/RegiIndex";

Vue.use(VueRouter)

// 先把原型的push方法备份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push | replace 方法
VueRouter.prototype.push = function(location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}
VueRouter.prototype.replace = function(location, resole, reject) {
  if (resole && reject) {
    originReplace.call(this, location, resole, reject)
  } else {
    originReplace.call(this, location, () => {}, () => {})
  }
}

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeIndex,
    meta: {
      show: true
    }
  },
  {
    path: '/search/:keyword?',
    name: 'Search',
    component: SearIndex,
    meta: {
      show: true
    },
    // props: true
    // 常用用函数写法
    // props: ($route) => {
    //   return {
    //     keyword: $route.params.keyword,
    //     k: $route.query.k
    //   }
    // }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginIndex,
    meta: {
      show: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegiIndex,
    meta: {
      show: false
    }
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
