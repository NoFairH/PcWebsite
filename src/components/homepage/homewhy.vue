<template>
  <div class="takeus animated nowhere">
    <div class="word allcenter"><img src="@/assets/images/about_why.png" alt=""></div>
    <div class="title allcenter">专业服务 · 选择<span style="color:#F80;">智慧财税就是选择好帮手</span></div>
    <div class="elrow">
      <div class="elcol" v-for="(item, index) in process" :key="index">
        <div class="content-wrapper" @mouseover.stop="changeborder(index)" :class="index == activeindex?'myshadow':''">
          <div class="allcenter div3"><img :src="item.ImgUrl" alt=""></div>
          <div class="allcenter div1">{{item.name}}</div>
          <div class="allcenter div2" v-for="(items, index) in item.descword" :key="index">{{items}}</div>
          <!-- <router-link to="/servicescope"><el-button plain size="medium" id="btn">查看详情</el-button></router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: "mywhy",
  data(){
    return {
      activeindex:null,
      isanimate:true,
      process:[
        {"name":"安全可靠","descword": ["云端数据，及时备份","第三方技术支持保护","数据全程加密，放心安全"],"ImgUrl":require("@/assets/images/home/ico01.svg")},
        {"name":"移动便捷","descword": ["线上线下的服务","提供移动端在线查看进度","地铁公交，手机查看"],"ImgUrl":require("@/assets/images/home/ico02.svg")}, 
        {"name":"简便易用","descword": ["支持订单账单模式结算","支持一账号多公司","单一处理数据"],"ImgUrl":require("@/assets/images/home/ico03.svg")},
        {"name":"实时高效","descword": ["系统自动反馈，24小时响应订单","即时提交后台管理系统","可靠、高效、实时协同"],"ImgUrl":require("@/assets/images/home/ico04.svg")},
        {"name":"专业革新","descword": ["5年经验技术团队","大数据进行行业分析","提供api技术对接"],"ImgUrl":require("@/assets/images/home/ico05.svg")}
      ]
    }
  },
  methods:{
    changeborder(index){
      if(index!= this.activeindex){
        this.activeindex = index
      }
    },
    showIcon(){
      if (this.$store.state.ifanimate) {
        if (!!document.documentElement.scrollTop && document.documentElement.scrollTop >1000) {
            document.querySelectorAll(".takeus")[1].style.display = "block"
            document.querySelectorAll(".takeus")[1].classList.add("fadeInRight")
          }
      } else{
        document.querySelectorAll(".takeus")[1].style.display = "block"
      }
    }
  },
  mounted(){
    window.addEventListener("scroll", this.showIcon);
  }
}
</script>

<style lang="stylus" scoped>
.el-button.is-plain:focus, .el-button.is-plain:hover
  background: #FFF;
  border-color: #FF3E25;
  color: #FF3E25;
.el-button--medium 
  padding 7px 23px
.takeus
  width 100%
  background #f0f0f0
  padding 20px 20px
  .word
    width 100%
    height 50px
    margin 30px 0px 0px 20px
  .title
    font-size 23px
    margin 20px 0px 0px 20px
    padding-left 15px
  .elrow
    height 250px
    margin 40px auto
    padding 0 40px
    background transparent
    display flex
    justify-content space-around
    align-items center
    .elcol
      height 100%
      width 20%
      margin 0 10px
      .content1
        height 100%
        width 100%
        background: #fff
        &>div
          color: #fff
        .ctop
          height 110px
          padding 20px
          &>div:nth-child(1)
            font-size 15px
            font-weight 700
          &>div:nth-child(2)
            font-size 15px
            font-weight 500
            margin-top 15px
        .cbottom
          height 130px
          padding 20px
          &>div
            font-size 18px
            font-weight 600
      .content-wrapper
        height 100%
        width 100%
        background #fff
        padding 10px
        &:hover
          cursor pointer
        div
          width 100%
        .div1
          height 30px
          color #000
          font-size 22px
          font-weight 500
          margin 10px auto 10px
        .div2
          width 100%
          margin-top 5px
          color #555
        .div3
          width 100%
          height 88px
          margin-top 20px
        .myshowmore
          box-shadow 1px 0px 9px #888
        .el-button
          display block
          margin 15px auto 0
        #btn
          margin-top 19px
        span
          height 50%
          width 100%
</style>
