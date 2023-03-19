// 引入mockjs模块
import Mock from 'mockjs';
// 把JSON数据引入进来
// webpack 默认对外暴露的：图片，JSON数据格式
import banner from './banner.json';
import floor from './floors.json';

// mock数据
// mock() 有两个参数，第一个参数请求地址，第二个参数请求数据
// 模拟首页轮播图
Mock.mock("/mock/banner", {
    code: 200,
    data: banner
});

// 模拟首页
Mock.mock("/mock/floors", {
    code: 200,
    data: floor
})

