<template>
  <div>
    <h1>这是params参数 {{$route.params.keyword}}</h1>
    <h1>这是query参数 {{$route.query.k}}</h1>
<!--    <h1>这是params参数 {{keyword}}</h1>-->
<!--    <h1>这是query参数 {{k}}</h1>-->
  </div>
</template>

<script>
export default {
  name: "SearIndex",
  // props: ['keyword', 'k']
}
</script>

<style scoped>

</style>