<template>
  <div class="servicescope" v-cloak>
    <topbanner></topbanner>
    <div class="topbannerImg">
      <div class="allcenter">了解企业管理痛点走个性化流程</div>
      <div class="allcenter">一次合作，终身服务！追求企业更高的管理效益；给您最合理的优化建议，以企业视角规划整体流程。</div>
    </div>
    <div class="processshow">
      <div class="processbox" v-for="(item, index) in process" :key="index">
        <li class="leftone allcenter">
          <img :src="item.ImgUrl" alt="">
        </li>
        <li class="rightone">
          <div class="topone allcenter">{{item.name}}</div>
          <div class="bottomone allcenter">{{item.descword}}</div>
        </li>
      </div>
    </div>
    <contantus></contantus>
  </div>
</template>

<script>
import topbanner from '../topbanner.vue'
import contantus from '../contantus.vue'
export default {
  name: 'myserviceprocess',
  data(){
    return {
      // process:[
      //   {"name":"第一步： 咨询了解","descword":"了解您的想法和战略需求，详细而深入的记录每个需求点；我们会根据您的需求列出您的需求和功能，如果需求比较详细甚至可以列出每个功能点的界面元素；双方再次确认各功能点和元素点是否一致。","ImgUrl":require("@/assets/images/process/process_1.png")},
      //   {"name":"第二步： 分析策划","descword":"我们会根据您的需求功能和每个元素要点，进行统筹、分析、策划，这是整个项目开始比较重要的步骤！","ImgUrl":require("@/assets/images/process/process_2.png")}, 
      //   {"name":"第三步： UI体验设计","descword":"为了让用户有一个更好的先期体验，我们首先会在项目上线前让用户在视觉体验，交互体验，信息呈现体验这几个方面有一个直观感受，以便项目更加完善。","ImgUrl":require("@/assets/images/process/process_3.png")},
      //   {"name":"第四步： 软件研发","descword":"“软件研发”是整个项目实质性的实施阶段，是以上各步骤的具体实现。包括“网站、APP、微信、PC”等前端开发设计和后端数据安全和架构的合理性构造都是比较重要的阶段。","ImgUrl":require("@/assets/images/process/process_4.png")},
      //   {"name":"第五步： 质控测试","descword":"针对工程项目的每个模块，每个功能点进行测试及时发现BUG及时更新及时完善，确保整个项目高质量完成。","ImgUrl":require("@/assets/images/process/process_5.png")},
      //   {"name":"第六步： 正式部署","descword":"我公司有一套完整的部署流程，针对不同的客户或者不同的要求有不同的部署解决方案。比较多的如“私有云、公有云、混合云”等。","ImgUrl":require("@/assets/images/process/process_6.png")},
      //   {"name":"第七步： 反馈优化","descword":"项目上线后，用户会有使用体验并反馈给过来，我们接收到用户反馈的后经过筛选讨论把好的建议落实到项目产品上，从而进一步优化产品。","ImgUrl":require("@/assets/images/process/process_7.png")},
      //   {"name":"第八步： 后续跟踪服务","descword":"后续的持续服务是项目规划的常远目标，项目的不断升级更新才能粘住用户，才能让用户有越来越好的体验。","ImgUrl":require("@/assets/images/process/process_8.png")}
      // ]
    }
  },
  components: {
    topbanner,
    contantus
  }
}
</script>

<style lang="stylus" scoped>
  .topbannerImg
    width 100%
    height 300px
    background url(../../assets/images/banner-process2.png) 20px
    background-size 100%
    margin-top 60px
    &>div
      height 150px
      width 100%
      box-sizing border-box
    &>div:nth-child(1)
      align-items flex-end
      padding-bottom 10px
      color #F80
      font-size 25px
      font-weight 600
    &>div:nth-child(2)
      color #FFF
      font-size 16px
      padding-top 10px
      align-items flex-start
  .processshow
    width 80%
    margin 0 auto
    .processbox
      border-bottom 1px solid #ddd
      height 250px
      width 100%
      &>li
        width 50%
        height 250px
        float left
        img
          height 170px
        &>div
          width 100%
        .topone
          height 30%
          justify-content flex-start
          font-size 22px
          font-weight 800
        .bottomone
          height 70%
          font-size 16px
          line-height 22px
</style>
