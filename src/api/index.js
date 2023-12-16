// 当前模块： 对所有API接口进行统一管理
import requests from "@/api/ajax";
import mockAjax from "@/api/mockAjax";
import { method } from "lodash";


/**
 * 三级联动
 * url: /api/product/getBaseCategoryList
 * get
 * 无参
 */
export const reqCategoryList = () => requests.get("/product/getBaseCategoryList")
    // 发送请求
    // return request({
    //     url: "/product/getBaseCategoryList",
    //     method: "get"
    // })

/**
 * 获取轮播图
 * url: /mock/banner
 * get
 * 无参
 */
//
export const reqBannerList = () => mockAjax.get('/banner');
/**
 * 获取floors
 * url: /mock/floors
 * get
 * 无参
 */
export const reqFloorsList = () => {
    return mockAjax({
        url: "/floors",
        method: "get"
    })
}

/**
 * 获取搜索的数据
 * url: /api/list
 * POST
 * 有参
 * 当前接口，给服务器传递一个空对象
 */
export const reqGetSearchInfo = (params) => {
    return requests({
        url: "/list",
        method: "post",
        data: params
    })
}

/**
 * 获取产品信息
 * url: /api/item/{ skuId }
 * GET
 * 有参
 */
export const reqGetGoodsInfo = (skuId) => {
    return requests({
        url: `/item/${skuId}`,
        method: "GET"
    })
}

/**
 * 添加到购物车(也可以对已有的物品进行数量改动)
 * url: /api/cart/addToCart/{ skuId }/{ skuNum }
 * POST
 * 有参
 */
export const reqPostShopCart = (skuId, skuNum) => {
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: "POST"
    })
}
