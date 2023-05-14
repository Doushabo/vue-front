<template>
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel) in lists" :key="carousel.id">
        <img :src="carousel.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "CarouselIndex",
  props: ['lists'],
  watch: {
    lists: {
      immediate: true,
      handler() {
        // 只能监听到数据已经有了，但是v-for动态渲染结构我们还是没有办法确定
        // 因此，还是需要nextTick
        this.$nextTick(() => {
          // eslint-disable-next-line no-unused-vars
          var mySwiper = new Swiper (this.$refs.floor1Swiper, {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
          })
        })
      }
    }
  },
}
</script>

<style scoped>

</style>