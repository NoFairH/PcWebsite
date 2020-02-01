<template>
  <div class="serviceassurance">
    <div class="servicetype">
      <div>我们的服务保证 Service Assurance</div>
      <hr>
      <div class="servicetitle">完美融合 量身定制 专业售后 管家帮助 人工客服</div>
      <div class="servicebox">
        <li v-for="(item, index) in solutions" :key="index" >
          <div class="serviceboxtop allcenter">
            <img class="myimg" :src="item.ImgUrl" @mouseover="changePic()">
          </div>
          <div class="serviceboxbottom">{{item.name}}</div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceassurance",
  data(){
    return {
      solutions:[
        {"name":"专业的技术团队","ImgUrl":require("@/assets/images/services11.png")},
        {"name":"完善的售后服务","ImgUrl":require("@/assets/images/services22.png")},
        {"name":"5年经验积累","ImgUrl":require("@/assets/images/services33.png")},
        {"name":"贴心指导帮助","ImgUrl":require("@/assets/images/services44.png")}]
    }
  },
  methods:{
    changePic(){
      // console.log("@/assets/images/services-"+index+".png");
      // this.solutions[0].ImgUrl = "require(../../assets/images/services22.png)"
      // console.log(this.solutions[index].ImgUrl);
    }
  }
}
</script>

<style lang="stylus" scoped>
.serviceassurance
  width 100%
  height 600px
  background url('../../assets/images/fuwubg.jpg')
  .servicetype
    height 800px
    width 100%
    background: url(../../assets/images/servebg.png) no-repeat 0px 616px;
    overflow hidden
    &>div
      width 500px
      height 50px
      display block
      margin 50px auto 5px
      text-align center
      font-size 30px
      color #FFF
    hr
      border none
      border-bottom 2px solid #f80
      width 190px
      margin 0 auto
      display block
    .servicetitle
      width 100%
      text-align center
      margin 20px 0 0 0
      font-size 17px
    .servicebox
      width 80%
      height 280px
      margin 10px auto
      li
        width 25%
        height 100%
        float left
        &:hover
          cursor pointer
        .serviceboxtop
          width 100%
          height 80%
          &>img
            height 75%
        .serviceboxbottom
          height 10%
          width 100%
          text-align center
          margin 10px 0
          font-size 18px
</style>
