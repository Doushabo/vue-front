import Vue from 'vue'
import Vuex from 'vuex'
// 引入各个模块的仓库
import home from "@/store/home";
import search from "@/store/search";
import detail from '@/store/detail';

Vue.use(Vuex)

export default new Vuex.Store({
    // 实现Vuex仓库模块式开发存储数据
    modules: {
        home,
        search,
        detail
    }
})
