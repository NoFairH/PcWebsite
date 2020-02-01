<template>
  <div v-cloak>
    <topbanner></topbanner>
    <div class="aboutus">
      <div class="imgbanner">
        <img src="@/assets/images/team.jpg" alt="">
      </div>
      <div class="companyImg allcenter">
        <div>
          <div class="allcenter">5+</div>
          <span class="allcenter">超过5年的技术积累</span>
        </div>
        <div>
          <div class="allcenter">30+</div>
          <span class="allcenter">30余名匠心技术人</span>
        </div>
        <div>
          <div class="allcenter">100+</div>
          <span class="allcenter">超100家企业的信赖</span>
        </div>
        <div>
          <div class="allcenter">7+</div>
          <span class="allcenter">7大大主营产品</span>
        </div>
      </div>
      <div class="desc_title"><i class="el-icon-message-solid"></i> 量身定制：国内专业软件研发提供商</div>
      <div class="desc_words">
        上海旺谦信息技术有限公司(以下简称旺谦)是国内领先的软件基础平台与解决方案提供商，主要面向中小型企业、政府机构及软件开发商提供SOA、大数据、云计算三大领域的软件基础平台及解决方案，用以满足上述组织信息化建设对关键技术的需求，帮助上述组织的业务向互联网、移动互联网转型，达到提升核心竞争力的目标。<br>
        旺谦在金融科技方面具有独特的行业经验，可快速实现组建金融企业管理流程，搭建业务体系，实现高效风控，以及对接各类接口，实现智能化、高效率、安全第一的企业运营。<br>
        旺谦模板定制主要技术专注于汽车行业和互联网云教育行业，成功为多家企业和学校完成管理升级，同时也为多家企业完成软件定制服务，在信息化时代，我们将本着专业、诚信、务实的态度，助力各行业的互联网化智能化升级，用上海的技术提升全国的高度。我们根据各类企业的需求，有针对性地推出app定制，同时积累了在智能技术、云计算、移动云教育、电商、金融等领域的丰富经验，我们不仅是一家软件公司，更是一家咨询公司，可以发现和解决企业的一些难题及痛点，实现企业的升级跨越。
      </div>
      
      <div class="desc_title"><i class="el-icon-s-opportunity"></i> 无忧服务：专业、安全、定制、体验</div>
      <div class="desc_words">
        历经5年经验积累和沉淀，旺谦不仅收获了先进的管理模式、完备的服务体系，还形成了高效的研发流程，打磨出了优秀的开发团队。每位员工都是各自领域的精英人士，拥有过硬的技术实力，真诚的服务态度，能够全心全意为客户提供优质的服务。<br>
        凭借全面的企业理念和精尖的技术人才，无数客户最终选择了与旺谦并肩同行。全天候响应式服务，诚信务实的企业作风，也使旺谦成为客户值得信赖的合作伙伴。<br>
        旺谦定制开发公司始终坚持以客户为中心，具创新求发展，树诚信致长存。精益求精，尽善尽美，不断在技术领域探寻突破，在服务领域引领潮流。牢牢把握科技核心技术，继往开来，乘风破浪，为助力中国企业前进，为立足互联网事业巅峰，不断奋斗。
      </div>
      
      <div class="desc_title"><i class="el-icon-user-solid"></i> 精英团队：不断追求、不断行动的团队</div>
      <div class="desc_words">
       公司目前有数位重量级别的IT架构师和开发人员，他们有着多年的开发和从业经验，对C# /Java /PHP 及 MVC框架甚是精通。我们拥有自主开发而且比较成熟的自适应性框架，目前已经为几十家企业和团体提供了优秀的互联网平台应用和适用于IOS/Android的API文档系统。<br>
       并凭借精湛的技术， 贴心的服务， 迅捷的响应，为国内外众多企事业机构及个人提供了优良服务， 并赢得了客户一致的好评和尊敬。 公司拥有技术过硬的团队， 完善的质量保障体系， 服务范围遍布全球， 服务行业涉及广泛。<br>
       作为移动互联网领域提供一站式的多平台解决方案的领先者，旺谦将为您的项目助力，让项目更好、更快、更广的占领市场。
      </div>
    </div>
    <mycontantus></mycontantus>
  </div>
</template>

<script>
import topbanner from '../topbanner.vue'
import mycontantus from '../contantus.vue'
export default  {
  name: "myaboutus",
  components: {
    topbanner,
    mycontantus
  }
}
</script>

<style lang="stylus" scoped>
  * 
    box-sizing border-box
  .aboutus
    width 100%
    padding-bottom  50px
    margin-top 60px
    .imgbanner
      height 390px
      overflow hidden
      img
        width 100%
        position relative
        top -200px
    .companyImg
      height 120px
      width 1200px
      margin 0 auto
      margin-top -70px
      box-shadow 1px 1px 12px 4px #555
      position relative
      background #fff
      padding 0 30px
      z-index 2
      justify-content flex-start
      div
        flex 1
        height 100%
        & *
          width 100%
        div
          height 60%
          width 100%
          font-weight 800
          font-size 30px
        span
          height 40%
          font-size 18px
          /* font-weight 600 */
    .desc_title
      text-align center
      font-size 24px
      margin 60px 0 10px
      font-weight 600
      color #f80
      &:hover
        cursor pointer
    .desc_words
      width 80%
      margin 0 auto
      padding 10px 20px 20px
      font-size 16px
      letter-spacing 1px
      color #666
      line-height 24px
      text-indent 16px
</style>
