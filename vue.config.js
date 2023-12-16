const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        // 数据来自哪台服务器 你就写哪台
        target: "http://gmall-h5-api.atguigu.cn"
      }
    }
  }
  
})
