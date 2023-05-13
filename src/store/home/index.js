// home模块的仓库
import {reqBannerList, reqCategoryList} from "@/api";

export default {
    state: {
        categoryList: [],
        bannerList: []
    },
    getters: {
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        },
        BANNERLIST(state, bannerList) {
            state.bannerList = bannerList;
        }
    },
    actions: {
        async categoryList({commit}) {
            let result = await reqCategoryList();
            if (result.code == 200) {
                commit("CATEGORYLIST", result.data);
            }
        },
        // get bannerList
        async getBannerList({commit}) {
            let result = await reqBannerList();
            if (result.code == 200) {
                commit("BANNERLIST", result.data);
            }
        }
    },
    modules: {
    }
}