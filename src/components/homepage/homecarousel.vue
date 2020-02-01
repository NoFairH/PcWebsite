<template>
  <el-carousel trigger="click" :interval="300000" height="500px" class="animated fadeInDownBig">
    <el-carousel-item class="allcenter" v-for="(item, index) in ImgList" :key="index">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "mycarousel",
    data(){
      return {
        ImgList:[require("@/assets/images/home/mybanner1.png"),
                 require("@/assets/images/home/mybanner2.png"),
                 require("@/assets/images/home/mybanner3.png")]
      }
    }
  }
</script>

<style lang="stylus">
.el-carousel__container
  &>button
    font-size 22px
  .el-carousel__item
    &>img
      height 100%
</style>
