<template>
  <div class="servicescope" v-cloak>
    <topbanner></topbanner>
    <div class="topbannerImg">
      <div class="allcenter">量身定制的一站式服务</div>
      <div class="allcenter">无忧服务 放心安心</div>
    </div>
    <servicemarticles></servicemarticles>
    <div class="servicetype">
      <div>服务列表 Solutions</div>
      <hr>
      <div class="servicebox">
        <li class="box" v-for="(item, index) in solutions" :key="index">
          <div class="servicename">
            <img :src="item.ImgUrl" alt="">
            <span>{{item.name}}</span>
          </div>
          <span class="servicetitle" v-for="(items, index) in item.Label" :key="index">
            {{items}}
          </span>
        </li>
        <li class="box box2" v-for="item in solutions2" :key="item.name">
          <div class="servicename">
            <img :src="item.ImgUrl" alt="">
            <span>{{item.name}}</span>
          </div>
          <span class="servicetitle" v-for="(items, index) in item.Label" :key="index ">
            {{items}}
          </span>
        </li>
        <router-link to="/feedback">
          <div class="getmore allcenter" @mouseleave="mouseleave()">
            共 <b style="font-weight: 600;font-size: 17px;"> 13 </b> 种服务，快尝试联系我们吧！
          </div>
        </router-link>
      </div>
    </div>
    <assurance></assurance>
    <contantus></contantus>
  </div>
</template>

<script>
import topbanner from '../topbanner.vue'
import contantus from '../contantus.vue'
import assurance from './assurance.vue'
import servicemarticles from './servicemarticles.vue'
export default {
  name: 'myservicescope',
  data(){
    return {
      solutions:[
        {"name":"注册公司","Label":['专业便捷','安全保密','收费透明','售后无忧'],"ImgUrl":require("@/assets/images/home/ico-1.svg")},
        {"name":"代理记账","Label":['安全记账','极速报表', '合理筹划','客服服务'],"ImgUrl":require("@/assets/images/home/ico-2.svg")},
        {"name":"公司审计","Label":['年报审计','专业验资','快速响应','资产审计'],"ImgUrl":require("@/assets/images/home/ico-3.svg")},
        {"name":"企业变更","Label":['极速变更','快速转让','服务到位','省心安心'],"ImgUrl":require("@/assets/images/home/ico-4.svg")},
        {"name":"商标注册","Label":['专属服务','快人一步','抢先查询','及时申报'],"ImgUrl":require("@/assets/images/home/ico-5.svg")},
        {"name":"人事代办","Label":['法制化','系统化','社会化','专业化'],"ImgUrl":require("@/assets/images/home/ico-6.svg")}
      ],
      solutions2:[
        {"name":"公司审计","Label":['年报审计','专业验资','快速响应','资产审计'],"ImgUrl":require("@/assets/images/home/ico-5.svg")},
        {"name":"企业变更","Label":['极速变更','快速转让','服务到位','省心安心'],"ImgUrl":require("@/assets/images/home/ico-1.svg")},
        {"name":"商标注册","Label":['专属服务','快人一步','抢先查询','及时申报'],"ImgUrl":require("@/assets/images/home/ico-2.svg")}
      ]
    }
  },
  components: {
    topbanner,
    contantus,
    assurance,
    servicemarticles
  },
  methods:{
    mouseleave(){
      document.querySelectorAll(".getmore")[0].style.transition = "0.5s"
    }
  }
}
</script>

<style lang="stylus" scoped>
.servicescope
  margin-top 60px
  .topbannerImg
    width 100%
    height 300px
    background url(../../assets/images/process/bg-zcgs-content.png) 
    background-size 100%
    &>div
      height 150px
      width 100%
      box-sizing border-box
    &>div:nth-child(1)
      align-items flex-end
      padding-bottom 10px
      color #FFF
      font-size 28px
      font-weight 600
      padding-bottom 20px
    &>div:nth-child(2)
      color #F80
      font-size 18px
      padding-top 20px
      align-items flex-start
  .servicetype
    height 980px
    width 100%
    background: url(../../assets/images/servebg.png) no-repeat 0px 816px;
    padding-top 10px
    &>div
      width 300px
      height 50px
      display block
      margin 60px auto 5px
      text-align center
      font-size 30px
    hr
      border none
      border-bottom 2px solid #f80
      width 190px
      margin 0 auto
      display block
    .servicebox
      width 70%
      .box
        width 33%
        height 220px
        display inline-block
        &:hover
          transform scale(1.05)
          transition 0.6s
          box-shadow 1px 1px 14px 3px #F8B86E
          cursor pointer
        .servicename
          height 130px
          width 100%
          padding-top 30px
          display flex
          justify-content space-around
          align-items center
          &>span
            font-size 25px
            color #DC481E
          img
            height 65px
            width 65px
            color red
        .servicetitle
          width 40%
          height 30px
          padding 8px
          display inline-block
          font-size 14px
          border-radius 25px
          border 1px dashed #999
          margin 5px 5%
          color #555
    .getmore
      height 50px
      width 330px
      padding 2px 30px
      margin 50px auto 0
      font-size 17px
      border-radius 4px
      border 2px solid #aaa
      transform scale(0.9)
      color #333
      &:hover
        cursor pointer
        border-radius 4px
        border 2px solid #ff8800
        color #ff8800
        transition 0.7s
        transform scale(1)
  .box2
    filter:blur(6px);
</style>
