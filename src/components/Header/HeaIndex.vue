<template>
  <div>
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>
            <!-- 没有登录：显示登录与注册 -->
            <!--!$store.state.user.nickName-->
            <p v-if="true">
              <span>请</span>
              <!-- <a href="###">登录</a> -->
              <!--
                声明式导航,当然你也可以使用编程式导航,因为不管是那个导航，都可以实现路由跳转，
                但是最后为什么选择声明式导航，没有任何业务、逻辑
               -->
              <router-link to="/login">登录</router-link>
              <router-link class="register" to="/register">注册</router-link>
            </p>
            <!-- 如果登录显示的是用户名字与退出登录 -->
            <p v-else>
              <a>{{$store.state.user.nickName}}</a>
              <a class="register" @click="logout">退出登录</a>
            </p>
          </div>
          <div class="typeList">
            <router-link to="/center">我的订单</router-link>
            <router-link to="/shopcart">我的购物车</router-link>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <router-link class="logo" to="/home">
            <img src="../../assets/images/header/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input
                type="text"
                id="autocomplete"
                class="input-error input-xxlarge"
                v-model="keyword"
            />
            <!-- 编程式导航:因为有业务 -->
            <button
                class="sui-btn btn-xlarge btn-danger"
                type="button"
                @click="goSearch"
            >
              搜索
            </button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaIndex",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    goSearch() {

      if (this.$route.query) {
        let location = {
          name: "Search",
          params: {keyword: this.keyword || undefined},
          // query: { k: this.keyword}
        }
        location.query = this.$route.query
        this.$router.push(location)
      }



      //确定路径当中有query参数
      // if (this.$route.query.categoryName) {
      //   locations.query = this.$route.query;
      // }

    },
    logout() {
      //派遣action退出登录
      this.$store.dispatch('logout');
    }
  },
  mounted() {
    //清除关键字
    this.$on("clearKeyword", () => {
      this.keyword = "";
    });
  }
}
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>