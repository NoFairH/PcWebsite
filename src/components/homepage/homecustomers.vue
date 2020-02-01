<template>
  <div class="customers">
    <div class="word allcenter"><img src="@/assets/images/about_customers.png" alt=""></div>
    <div class="title allcenter">客户展现 · 一切靠实力说话</div>
    <el-row :gutter="20">
      <el-col :span="4" v-for="(item, index) in obdate" :key="index">
        <transition>
          <div class="grid-content bg-purple companyicon" @mouseover.stop="companynamefade(index)" @mouseleave="companynameshow(index)">
            <div class="allcenter imgdiv">
              <img class="logoimg" :src="item.ImgUrl" alt="">
              <span class="logoname">{{item.companyname}}</span>
            </div>
          </div>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "mycustomers",
  data() {
    return {
      "obdate":[{"ImgUrl":require("@/assets/images/home/logo1.png"),"companyname":"金融管理系统",},{"ImgUrl":require("@/assets/images/home/logo2.png"),"companyname":"男左女右APP"},{"ImgUrl":require("@/assets/images/home/logo3.png"),"companyname":"鼎唯科技"},{"ImgUrl":require("@/assets/images/home/logo4.png"),"companyname":"Ford数据管理API系统"},{"ImgUrl":require("@/assets/images/home/logo5.png"),"companyname":"JMC汽车经销商管理系统"},{"ImgUrl":require("@/assets/images/home/logo6.png"),"companyname":"在线交易系统"},{"ImgUrl":require("@/assets/images/home/logo7.png"),"companyname":"供应链管理系统"},{"ImgUrl":require("@/assets/images/home/logo8.png"),"companyname":"微校互联APP"},{"ImgUrl":require("@/assets/images/home/logo9.png"),"companyname":"生活商城App"},{"ImgUrl":require("@/assets/images/home/logo10.png"),"companyname":"VLVO汽车经销商管理系统",},{"ImgUrl":require("@/assets/images/home/logo11.png"),"companyname":"会展管理系统"},{"ImgUrl":require("@/assets/images/home/logo12.png"),"companyname":"船务建造管理系统"}]
    }
  },
  methods:{
    companynamefade(index){
      // 鼠标移入 背景色切换 与切换时间
      document.querySelectorAll(".imgdiv")[index].style.background = "#fff" 
      document.querySelectorAll(".imgdiv")[index].style.transition = "1s"
      // document.querySelectorAll(".imgdiv")[index].innerHTML = this.wordList[index]
      // 鼠标移入 图片切换 与切换时间
      document.querySelectorAll(".logoimg")[index].style.display = "none"
      document.querySelectorAll(".logoimg")[index].style.transition = "0.1s"
      // 鼠标移入 文字切换 与切换时间
      document.querySelectorAll(".logoname")[index].style.display = "block"
      document.querySelectorAll(".logoname")[index].style.transition = "0.1s"
    },
    companynameshow(index){
      console.log(index);
      document.querySelectorAll(".logoname")[index].style.display = "none"
      document.querySelectorAll(".logoname")[index].style.transition = "0.1s"
      document.querySelectorAll(".imgdiv")[index].style.background = "transparent" 
      document.querySelectorAll(".logoimg")[index].style.display = "block"
      document.querySelectorAll(".imgdiv")[index].style.transition = "0.4s"
      document.querySelectorAll(".logoimg")[index].style.transition = "4s"
    }
  }
}
</script>

<style lang="stylus" scoped>
.customers
  background #fff
  width 100%
  height 470px
  padding 0 20px
  .word
    width 100%
    height 50px
    margin 30px 0px 40px 40px
  .title
    font-size 23px
    margin 20px 0px 0px 82px
    padding-left 15px
  .el-row
    background #fff
    height 150px
    .el-col
      height 130px
      margin 10px 0
      .companyicon
        height 100%
        &:hover
          cursor pointer
        &>div
          background #fff
          height 100%
          width 100%
        & img
          height 80%
        & span
          display none
          color #fff
          font-size 16px
        .logoname
          font-size 15px
          font-weight 600
</style>
