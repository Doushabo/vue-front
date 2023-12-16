import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入routes.js
import routes from './routes.js'

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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 滚动行为，具体看文档
  scrollBehavior(to, from) {
    return {y: 0};
  }
})

export default router
