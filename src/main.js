import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
// 引入mockServer.js
import '@/mock/mockServer';
// 引入swiper
import "swiper/css/swiper.css"

// 三级联动组件 注册为全局组件
import TypeNav from "@/components/TypeNav/TypeNav.vue";
// 轮播图 注册为全局组件
import CarouselIndex from "@/components/Carousel/CarouselIndex.vue";
// 分页器 注册为全局组件
import PagIndex from "@/components/Pagination/PagIndex.vue";

// 注册全局组建
Vue.component(TypeNav.name, TypeNav)
Vue.component(CarouselIndex.name, CarouselIndex)
Vue.component(PagIndex.name, PagIndex)

// 使用
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
