<template>
  <div id="app">
    <HeaIndex/>
    <router-view/>
    <!-- 在Home，Search显示，在登陆，注册隐藏 -->
    <FooIndex v-show="$route.meta.show"/>
  </div>
</template>

<script>
import HeaIndex from "@/components/Header/HeaIndex";
import FooIndex from "@/components/Footer/FooIndex";
export default {
  name: 'App',
  components: {
    HeaIndex,
    FooIndex
  },
  mounted() {
    // 通过Vuex发送请求，存储与仓库中 派发一个action
    this.$store.dispatch('categoryList');
  }
}
</script>

<style>

</style>
