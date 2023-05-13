// 对于axios进行二次封装
// 引入axios
import axios from "axios";
// 引入进度条
// start：进度条开始
// done: 进度条结束
import nprogress from 'nprogress'
// 引入进度条的样式
import 'nprogress/nprogress.css'

// 1. 利用axios对象方法create, 去创建一个axios实例
/**
 * baseURL:“/api”    基础路径，在请求的URL上自动带上/api
 * timeout: 5000     请求超时的时间 5秒
 * @type {axios.AxiosInstance}
 */
const requests = axios.create({
    // 配置对象
    baseURL: "/mock",
    timeout: 5000,
})

// 请求拦截器, 在发送请求之前，请求拦截器可以检测到，可以做一些事情
requests.interceptors.request.use((config) => {
    // config是一个配置对象，里面有一个很重要的属性，header请求头
    // 进度条开始
    nprogress.start()
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数
    // 进度条结束
    nprogress.done();
    return res.data
}, () => {
    return Promise.reject(new Error('false'))
})



// 对外暴露
export default requests;