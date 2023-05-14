// home模块的仓库
import {reqBannerList, reqCategoryList, reqFloorsList} from "@/api";

export default {
    state: {
        categoryList: [],
        bannerList: [],
        floorList: [],
    },
    getters: {
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        },
        BANNERLIST(state, bannerList) {
            state.bannerList = bannerList;
        },
        FLOORLIST(state, floorList) {
            state.floorList = floorList;
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
        },
        async getFloorList({commit}) {
            let result = await reqFloorsList();
            if (result.code == 200) {
                commit("FLOORLIST", result.data);
            }
        }
    },
    modules: {
    }
}