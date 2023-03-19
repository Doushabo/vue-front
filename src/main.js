import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入mockServer.js
import '@/mock/mockServer';

// 三级联动组件 注册为全局组件
import TypeNav from "@/components/TypeNav/TypeNav";

Vue.component(TypeNav.name, TypeNav)


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
