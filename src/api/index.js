// 当前模块： 对所有API接口进行统一管理
import request from "@/api/ajax";
import mockAjax from "@/api/mockAjax";


/**
 * 三级联动
 * url: /api/product/getBaseCategoryList
 * get
 * 无参
 */
export const reqCategoryList = () => request.get("/product/getBaseCategoryList")
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

