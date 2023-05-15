// search模块的仓库
import {reqGetSearchInfo} from "@/api";

export default {
    // namespaced: true,
    state: {
        searchList: {}
    },
    // 用于计算属性，不过 主要的作用是简化仓库的数据
    getters: {
        goodsList(state) {
            return state.searchList.goodsList || [];
        },
        trademarkList(state) {
            return state.searchList.trademarkList || [];
        },
        attrsList(state) {
            return state.searchList.attrsList || [];
        }
    },
    mutations: {
        GETSEARCHLIST(state, searchList) {
            state.searchList = searchList;
        }
    },
    actions: {
        async getSearchList({commit}, params={}) {
            let result = await reqGetSearchInfo(params);
            console.log(result);
            if (result.code == 200) {
                commit("GETSEARCHLIST", result.data);
            }
        }
    },
    modules: {
    }
}