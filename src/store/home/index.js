// home模块的仓库
import {reqCategoryList} from "@/api";

export default {
    state: {
        categoryList: []
    },
    getters: {
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        }
    },
    actions: {
        async categoryList({commit}) {
            let result = await reqCategoryList();
            if (result.code == 200) {
                commit("CATEGORYLIST", result.data)
            }
        }
    },
    modules: {
    }
}