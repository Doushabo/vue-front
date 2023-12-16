// detail的仓库
// 引入接口关于详情页的api
import {reqGetGoodsInfo, reqPostShopCart} from "@/api/index.js"

const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
}
const actions = {
    // 获取产品信息
    async getGoodsInfo({commit}, skuId) {
        let result = await reqGetGoodsInfo(skuId);
        if(result.code == 200) {
            commit("GETGOODINFO", result.data)
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        let result = await reqPostShopCart(skuId, skuNum);
        if(result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("faile"));
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 产品的信息
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}