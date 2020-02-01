<template>
  <div class="takeus animated nowhere">
    <div class="word allcenter"><img src="../../assets/images/about_smarttax.png" alt=""></div>
    <div class="title allcenter">智慧财税 · 能<span class="fcolor">为您的客户做什么？</span></div>
    <!-- <div class="title allcenter" style="font-size: 22px;">能为<span style="color:#F80;">您的客户：</span></div> -->
    <el-row  :gutter="25">
      <el-col :span="4">
        <div class="grid-content bg-purple" id="mybox">
          <div class="topimg allcenter">
            <div style="background-position: -5px -320px;"></div>
          </div>
          <div class="bottomword">注册公司</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" id="mybox">
          <div class="topimg allcenter">
            <div style="background-position: -85px -85px;"></div>
          </div>
          <div class="bottomword">代理记账</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" id="mybox">
          <div class="topimg allcenter">
            <div style="background-position: -5px -80px;"></div>
          </div>
          <div class="bottomword">公司审计</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" id="mybox">
          <div class="topimg allcenter">
            <div style="background-position: -85px -398px;"></div>
          </div>
          <div class="bottomword">企业变更</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" id="mybox">
          <div class="topimg allcenter">
            <div style="background-position: -85px -245px;"></div>
          </div>
          <div class="bottomword">商标注册</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple" id="mybox">
          <div class="topimg allcenter">
            <div style="background-position: -85px -160px;"></div>
          </div>
          <div class="bottomword">人事代办</div>
        </div>
      </el-col>
    </el-row>
    <div class="smarttaxdesc"><span class="fcolor">智慧财税</span>为<span class="fcolor"><b class="tagb">您的客户</b></span>竭诚服务，全面提升服务效率、整合线上线下资源！<span class="fcolor"> <b class="tagb">彻底改变</b></span>传统营销策略及方法</div>
    <div class="smarttaxdesc">我们还将运营、营销、管理及服务智慧系统整合在一起，<span class="fcolor"> <b class="tagb">一体化解决</b>您企业营运中的疼点问题！</span></div>
    <router-link to="/servicescope">
      <div class="getmore allcenter">
        不止这些 还有更多
      </div>
    </router-link>
  </div>
</template>

<script>
export default{
  name: "mywhy",
  data(){
    return {
      activeindex: null
    }
  },
  methods:{
    changeborder(index){
      if(index!= this.activeindex){
        this.activeindex = index
      }
    },
    showIcon(){
      console.log(document.documentElement.scrollTop);
      if(this.$store.state.ifanimate){
        document.querySelectorAll(".takeus")[0].style.display = "block"
        document.querySelectorAll(".takeus")[0].classList.add("fadeInRight")
      }else{
        document.querySelectorAll(".takeus")[0].style.display = "block"
      }
    }
  },
  mounted(){
    //此处添加showIcon的原因： 在第二次进入首页时，总是需要滚动滑轮才会执行方法
    // 这里作为所有组件判断的开始  让其mounted直接执行即可 "解决滚动滑轮才能显示全部首页的" 不好体验
    this.showIcon();
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
  height 530px
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
  .el-row
    height 130px
    width 100%
    margin 40px 0 35px
    padding 0 50px
    .el-col
      height 100%
      #mybox
        height 100%
        width 100%
        &:hover

          position relative
          top -8px
          transition 1s
          .bottomword
            color #f80
        .topimg
          height 100px
          width 100%
          div
            width 70px
            height 70px
            background url('../../assets/images/home/icons_items.png')
        .bottomword
          font-size 16px
          color #444
          width 100%
          height 30px
          text-align center
          line-height 30px
  .getmore
    height 35px
    width 150px
    text-align center
    line-height 30px
    margin 30px auto 10px
    font-size 13px
    border-radius 4px
    border 2px solid #ff8800
    color #ff8800
    border-radius 4px
    &:hover
      cursor pointer
</style>
