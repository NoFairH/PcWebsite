<template>
  <div class="customers animated nowhere">
    <div class="word allcenter"><img src="@/assets/images/about_customers.png" alt=""></div>
    <div class="title allcenter">智慧财税 · 能<span style="color:#F80;">为您的客户分担什么 ？</span></div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in obdate" :key="index">
        <transition>
          <div class="grid-content bg-purple companyicon">
            <div class="allcenter imgdiv" @mouseleave="companynameshow(index)">
              <img class="logoimg" :src="item.ImgUrl" alt=""  @mouseover.stop="companynamefade(index)">
              <span class="logoname">
                <div class="wordTitle">
                  {{item.companytitle}}
                </div>
                <div class="wordBody">{{item.companyname}}</div>
              </span>
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
      "obdate":[
        {"ImgUrl":require("@/assets/images/home/phoneImg1.png"),"companytitle":"升级版分销体系","companyname":"让客户自己将您的业务分享到各大社交媒体，通过分享链接注册的用户后可分为“意向客户、成交客户、失效客户”"},
        {"ImgUrl":require("@/assets/images/home/phoneImg2.png"),"companytitle":"高效的消息推送","companyname":"结合客户管理、服务管理、系统短信提醒等功能，让客户拥有更高效、快捷的体验！将员工管理、分公司管理、服务管理、客户管理、营销管理整合一体化"},
        {"ImgUrl":require("@/assets/images/home/phoneImg3.png"),"companytitle":"省心的移动办公","companyname":"使用者可通过我们的系统，能轻松实现在任何时间，任何地点，查看业务、处理业务、业务解答、培训资料等。全面提升服务效率、整合线上线下资源！彻底改变传统营销策略及方法！"},
        {"ImgUrl":require("@/assets/images/home/phoneImg4.png"),"companytitle":"完善的积分体系","companyname":"积分兑换、分享返利、积分抵现、活动推荐、任务积分等功能模块将全面整合您的目标客户，开启口碑营销。一套真正从财税代理公司整体出发，整合了运营、营销、管理及服务智慧系统，并一体化地解决企业营运中的各种疼点问题！"}
      ]
    }
  },
  methods:{
    companynamefade(index){
      // 鼠标移入 背景色切换 与切换时间
      document.querySelectorAll(".imgdiv")[index].style.background = "#fff" 
      // 鼠标移入 文字切换 与切换时间
      document.querySelectorAll(".logoname")[index].style.display = "block"
    },
    companynameshow(index){
      document.querySelectorAll(".logoname")[index].style.display = "none"
      document.querySelectorAll(".imgdiv")[index].style.background = "transparent" 
      document.querySelectorAll(".logoimg")[index].style.display = "block"
    },
    showIcon(){
      console.log(this.$store.state.ifanimate);
      if (this.$store.state.ifanimate) {
        if (!!document.documentElement.scrollTop && document.documentElement.scrollTop > 350) {
            document.querySelectorAll(".customers")[0].style.display = "block"
            document.querySelectorAll(".customers")[0].classList.add("fadeInLeft")
          }
      } else{
        document.querySelectorAll(".customers")[0].style.display = "block"
      }
    }
  },
  mounted(){
    window.addEventListener("scroll", this.showIcon);
  }
}
</script>

<style lang="stylus" scoped>
.customers
  background #fff
  width 100%
  height 600px
  padding 0 20px 40px
  margin 0 0 40px
  .word
    width 100%
    height 50px
    margin 30px 0px 40px 10px
  .title
    font-size 23px
    margin 20px 0px 0px 0
    padding-left 15px
  .el-row
    background #fff
    height 150px
    margin 20px 0 0
    .el-col
      height 430px
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
          height 95%
        & span
          display none
          color #fff
          font-size 16px
        .logoname
          font-size 15px
          font-weight 600
          color #FFF
          position absolute
          text-align center
          background rgba(0,0,0,.8)
          width 232px
          height 410px
          padding 4px 0
          border-radius 25px
          white-space normal
          .wordTitle
            width 100%
            height 90px
            line-height 100px
            text-align center
            font-size 18px
            padding-top 20px
            font-weight 600
          .wordBody
            width 100%
            height 280px
            text-indent 20px
            padding 20px 10px 0
            font-size 15px
            line-height 20px
            font-weight 500
            color #fff
</style>
