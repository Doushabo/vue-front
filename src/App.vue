<template>
  <div id="app">
    <HeaIndex/>
    <router-view/>
    <FooIndex/>
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
