<template>
  <div class="contantus">
    <div class="message">
      <div>联系我们 Contant US</div>
      <li class="allcenter">
        <span class="allcenter"><img src="@/assets/images/home/bottomicon1.svg" alt=""></span>
        <span>上海市浦东航梅路亿联中心E馆</span>
      </li>
      <li class="allcenter">
        <span class="allcenter"><img src="@/assets/images/home/bottomicon2.svg" alt=""></span>
        <span>021-51860825</span>
      </li>
      <li class="allcenter">
        <span class="allcenter"><img src="@/assets/images/home/bottomicon3.svg" alt=""></span>
        <span>13816828874 24 Hours 服务</span>
      </li>
      <li class="allcenter">
        <span class="allcenter"><img style="height:18px;width:18px" src="@/assets/images/home/bottomicon4.svg" alt=""></span>
        <span>787373862@qq.com</span>
      </li>
 <!--     <li class="allcenter">
        <span class="allcenter"><img src="@/assets/images/home/bottomicon5.svg" alt=""></span>
        <span>--</span>
      </li> -->
    </div>
    <div class="middlediv">
      <div class="bottomword imgbottomword">
        <img src="@/assets/images/home/bottom1.png" alt="">
        <img src="@/assets/images/home/bottom2.png" alt="">
        <img src="@/assets/images/home/bottom3.png" alt="">
      </div>
      <div class="bottomword">
        COPYRIGHT © 上海旺谦信息技术有限公司 版权所有 沪ICP备17024799号
      </div>
      <div class="bottomword">
        友情链接： <a href="#">上海旺谦信息技术有限公司 </a> | <a href="http://www.086web.com/">上海鼎唯信息科技有限公司</a> | 友链申请QQ：787373862
      </div>
    </div>
    <div class="bincode">
      <div class="word">
        微信在线沟通 Wechat
        <div class="allcode allcenter">
          <div class="codediv">
            <img src="../assets/images/home/weixin-james.png" alt="">
            <span>框架工程师</span>
          </div>
          <div class="codediv">
            <img src="../assets/images/home/weixin-hbb.png" alt="">
            <span>技术工程师</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycontantus'
}
</script>

<style lang="stylus" scoped>
.contantus
  width 100%
  height 210px
  padding 20px 80px
  background #444
  display flex
  justify-content flex-start
  box-sizing border-box
  .message
    width 360px
    height 100%
    float left
    color #fff
    div
      font-size 16px
      font-weight 600
      margin 10px 0 15px
    li
      width 100%
      height 28px
      justify-content space-around
      span:nth-child(1)
        width 20px
        height 20px
        margin 0 20px
        img
          width 100%
          height 100%
      span:nth-child(2)
        flex 1
        font-size 14px
        color #999
  .bincode
    width 350px
    height 100%
    float right
    .word
      width 100%
      text-align center
      font-size 16px
      color #fff
      margin 10px 0
      font-weight 600
      .allcode
        width 100%
        height 110px
        margin-top 35px 
        justify-content space-around
        .codediv
          width 80px
          height 112px
          img
            width 80px
            height 80px
          span
            text-align center
            line-height 32px
            font-weight 500
            font-size 12px
            color #999
  .middlediv
    float left
    height 100%
    padding-top 40px
    margin 0 auto
    .bottomword
      width 580px
      height 40px
      line-height 40px
      color #999
      font-size 13px
      margin 0 auto
      text-align center
      img
        display inline-block
        width 30px
        height 30px
        margin-right 20px
      a
        color #999
        &:hover
          color #fff
  .el-button
    float right
    margin-right 100px
    transform scale(1.3)
    position fixed 
    top 200px
</style>
