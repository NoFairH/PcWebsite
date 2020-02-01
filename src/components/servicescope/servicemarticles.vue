<template>
  <div class="servicemarticles">
    <div class="title">服务具体流程</div>
    <hr>
    <div class="titleword">只需轻松五步，即可<span style="color:#F80;font-weight: 600;">为您的客户</span>提供最便捷的服务！</div>
    <div class="imgdiv">
      <img src="../../assets/images/process/process.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'myservicemarticles'
}
</script>

<style lang="stylus" scoped>
  .servicemarticles
    height 390px
    width 100%
    padding-top 10px
    .title
      width 300px
      height 50px
      display block
      margin 60px auto 5px
      text-align center
      font-size 30px
    hr
      border none
      border-bottom 2px solid #f80
      width 130px
      margin 0 auto
      display block
    .imgdiv
      height 115px
      overflow hidden
      margin 30px auto 0px
      img
        display block
        margin 0 auto
    .titleword
      width 800px
      height 50px
      display block
      margin 40px auto 5px
      text-align center
      font-size 22px
</style>
