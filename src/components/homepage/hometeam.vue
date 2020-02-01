<template>
  <div class="dobdiv animated nowhere">
    <div class="word-desc">
      <div class="about"> <img src="../../assets/images/about_dzonly.png" alt=""></div>
      <div style="font-size:23px">做更好、更优秀的中国财税一站式服务提供商</div>
      <div class="productshow">
        <li>
          <div class="number allcenter">
            1000+
          </div>
          <span class="numberworld allcenter">超过1000次的优质服务</span>
        </li>
        <li>
          <div class="number allcenter">
            5+
          </div>
          <span class="numberworld allcenter">5年的技术积累</span>
        </li>
        <li>
          <div class="number allcenter">
            10+
          </div>
          <span class="numberworld allcenter">10余主要服务</span>
        </li>
      </div>
    </div>
    <div class="takemore">
      <router-link to="/aboutus">
        <span class="">了解更多信息</span>
      </router-link>
      <div class="allcenter">
        <img src="@/assets/images/rightgo.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"myhometeam",
  data(){
    return {}
  },
  methods:{
    showIcon(){
      if (this.$store.state.ifanimate) {
        if (!!document.documentElement.scrollTop && document.documentElement.scrollTop > 1500) {
            this.$store.commit('doanimate')
            document.querySelectorAll(".dobdiv")[0].style.display = "block"
            document.querySelectorAll(".dobdiv")[0].classList.add("fadeInLeft")
          }
      } else{
        document.querySelectorAll(".dobdiv")[0].style.display = "block"
      }
    }
  },
  mounted(){
    window.addEventListener("scroll", this.showIcon);
  }
}
</script>

<style lang="stylus" scoped>
.dobdiv
  height 430px
  width 100%
  .word-desc
    &>div
      display flex
      justify-content center
      align-items center
    .about
      margin 70px 0 20px
    .world
      font-size:12px
    .productshow
      width 50%
      margin 18px auto 0
      height 100px
      &>li
        width 33%
        height 100%
        .number
          width 100%
          height 75%
          font-weight 800
          font-size 28px
        .numberworld
          width 100%
          height 25%
          font-weight 600
  .takemore
    height 35px
    width 150px
    margin 40px auto
    padding 0 5px
    border 2px solid #ff8800
    border-radius 4px
    transition: all 0.15s linear;
    &:hover
      cursor pointer
      transform scale(1.1)
      transition 0.15s
      transition-timing-function: ease;
    span
      display inline-block
      height 30px 
      width 110px
      float left
      color #ff8800
      font-size 14px
      font-weight 600
      text-align center
      line-height 30px
    div
      float left
      height 30px
      width 20px
      &>img
        width 25px
        height 25px
</style>
