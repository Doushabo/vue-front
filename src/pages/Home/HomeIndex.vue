<template>
  <div>
    <!-- 需要使用三级联动Nav -->
    <TypeNav/>
    <ListConIndex/>
    <RecIndex/>
    <RankIndex/>
    <LikeIndex/>
    <FloorIndex v-for="(floor) in floorList" :key="floor.id" :list = "floor"/>
    <BrandIndex/>
  </div>
</template>

<script>
import {mapState} from "vuex";
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
  },
  mounted() {
    // 派发action, 获取floor的数据
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({floorList: state => {return state.home.floorList;}})
  }
}
</script>

<style scoped>

</style>