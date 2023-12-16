// 路由配置的信息
import HomeIndex from "@/pages/Home/HomeIndex";
import SearIndex from "@/pages/Search/SearIndex";
import LoginIndex from "@/pages/Login/LoginIndex";
import RegiIndex from "@/pages/Register/RegiIndex";
import DetailIndex from "@/pages/Detail/DetailIndex";
import AddSuccessIndex from "@/pages/AddCartSuccess/AddSuccessIndex";

// 关于MuseDash的路由配置
import InfoIndex from "@/pages/MuseDash/InfoIndex";

export default [
  // 关于MuseDash的配置
    {
      path: "/museinfo",
      name: "MuseInfo",
      component: InfoIndex
    },
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
    {
      path: '/detail/:skuid',
      name: 'Detail',
      component: DetailIndex,
      meta: {
        show: true
      }
    },
    {
      path: '/addcartsuccess',
      name: 'AddCartSuccess',
      component: AddSuccessIndex
    },
  
    // 重定向
    {
      path: '*',
      redirect: "/home"
    }
  
]
