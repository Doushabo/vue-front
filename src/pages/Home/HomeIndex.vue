<template>
  <div>
    <!-- 需要使用三级联动Nav -->
    <TypeNav/>
    <ListConIndex/>
    <RecIndex/>
    <RankIndex/>
    <LikeIndex/>
    <FloorIndex/>
    <BrandIndex/>
  </div>
</template>

<script>
import RecIndex from "@/pages/Home/Recommend/RecIndex";
import RankIndex from "@/pages/Home/Rank/RankIndex";
import LikeIndex from "@/pages/Home/Like/LikeIndex";
import FloorIndex from "@/pages/Home/Floor/FloorIndex";
import BrandIndex from "@/pages/Home/Brand/BrandIndex";
import ListConIndex from "@/pages/Home/ListContainer/ListConIndex.vue";
export default {
  name: "HomeIndex",
  components: {
    ListConIndex,
    RecIndex,
    RankIndex,
    LikeIndex,
    FloorIndex,
    BrandIndex
  }
}
</script>

<style scoped>

</style>