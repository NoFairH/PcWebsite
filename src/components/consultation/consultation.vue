<template>
  <div v-cloak>
    <topbanner></topbanner>
    <div class="consultation">
      <div class="topImg">
        <img src="../../assets/images/newsPicture.jpg" alt="">
      </div>
      <!-- <h1>新闻咨询&nbsp;&nbsp;&nbsp; NEWs</h1> -->
      <ul class="ulnews">
        <li class="linew" v-for="(item, index) in 6" :key="index">
          <div class="Imgbox">
            <img src="../../assets/images/wxpic.png" alt="">
          </div>
          <div class="Wordbox">
            <div class="wordDate">
              2017. 02. 05
            </div>
            <div class="wordtitle onelinego">
              微信崛起风云 ： 雷军的密聊曾经走在微信崛起风云 
            </div>
            <div class="wordmessage">
              2014春节前夕，卫星红包还在内测，一张网络流传的截图显示，马化腾是产品的第一批体验者
              2014春节前夕，卫星红包还在内测，一张网络流传的截图显示，马化腾是产品的第一批体验者
              2014春节前夕，卫星红包还在内测，一张网络流传的截图显示，马化腾是产品的第一批体验者2014春节前夕，卫星红包还在内测，一张网络流传的截图显示，马化腾是产品的第一批体验者
              2014春节前夕，卫星红包还在内测，一张网络流传的截图显示，马化腾是产品的第一批体验者
              2014春节前夕，卫星红包还在内测，一张网络流传的截图显示，马化腾是产品的第一批体验者
            </div>
            <div class="takemore">
              <span class="">详细信息</span>
              <div class="allcenter">
                <img src="@/assets/images/rightgo.svg" >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <mycontantus></mycontantus>
  </div>
</template>

<script>
import topbanner from '../topbanner.vue'
import mycontantus from '../contantus.vue'
export default {
  name: "consultation",
  data(){
    return {
      
    }
  },
  components: {
    topbanner,
    mycontantus
  }
}
</script>

<style lang="stylus" scoped>
  .consultation
    width 100%
    background #f0f0f0
    margin-top 60px
    .topImg
      width 100%
      height 500px
      img
        width 100%
        height 100%
    h1
      width 80%
      margin 40px auto
      text-align center
      font-size 35px
      font-weight 500
    .ulnews
      width 60%
      margin 30px auto 0
      .linew
        width 100%
        height 220px
        padding 20px
        box-sizing border-box
        margin 20px 0
        display flex
        border 1px solid #ddd
        border-radius 5px
        &:hover
          box-shadow 1px 1px 12px 3px #aaa
          cursor pointer
          transition 0.5s
          transform scale(1.01)
        .Imgbox
          height 180px
          width 180px
          margin-right 30px
          min-width 150px
          min-height 150px
        .Wordbox
          height 100%
          flex 1
          min-width 240px
          padding 10px
          .wordDate
            color #666
            font-size 30px
            font-weight 500
          .wordtitle
            width 100%
            height 25px 
            line-height 25px
            margin 6px auto
            font-size 15px
            font-weight 600
          .wordmessage
            height 47px
            width 100%
            letter-spacing 1px
            line-height 16px
            font-size 13px
            font-weight 500
            color #444
            overflow: hidden; 
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3; 
            text-overflow:ellipsis;
          .takemore
            height 25px
            width 100px
            float right
            margin-top 20px
            padding 0 5px
            border 1px solid #D25745
            transition: all 0.15s linear;
            &:hover
              cursor pointer
              transform scale(1.1)
              transition 0.15s
              transition-timing-function: ease;
            span
              display inline-block
              height 25px 
              width 70px
              float left
              color #D25745
              font-size 14px
              font-weight 600
              text-align center
              line-height 25px
            div
              float left
              height 25px
              width 15px
              &>img
                width 15px
                height 15px
</style>
