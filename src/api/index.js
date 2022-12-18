// 当前模块： 对所有API接口进行统一管理
import request from "@/api/request";


/**
 * 三级联动
 * url: /api/product/getBaseCategoryList
 * get
 * 无参
 */
export const reqCategoryList = () => {
    // 发送请求
    return request({
        url: "/product/getBaseCategoryList",
        method: "get"
    })
}

