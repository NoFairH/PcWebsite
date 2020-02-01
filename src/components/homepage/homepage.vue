<template>
  <div class="hello" v-cloak>
    <topbanner></topbanner>
    <homecarousel></homecarousel>
    <homeservice></homeservice> <!-- 为您的客户做什么 -->
    <homecontent></homecontent> <!-- 为您的客户分担什么 -->
    <homewhy></homewhy> <!-- 智慧财税就是选择好帮手 -->
    <hometeam></hometeam> <!-- 做更好、更优秀的中国财税一站式服务提供商 -->
    <mycontantus></mycontantus>
  </div>
</template>

<script>
import topbanner from '../topbanner.vue'
import homecarousel from './homecarousel.vue'
import homewhy from './homewhy.vue'
import homecontent from './homecontent.vue'
import homeservice from './homeservice.vue'
import hometeam from './hometeam.vue'
import mycontantus from '../contantus.vue'
export default {
  name: 'homepage',
  components:{
    topbanner,
    homecarousel,
    homewhy,
    homecontent,
    mycontantus,
    homeservice,
    hometeam
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .hello
    padding-top 60px
    
</style>
