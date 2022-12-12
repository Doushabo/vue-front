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
  }
}
</script>

<style>

</style>
