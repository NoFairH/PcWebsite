<template>
  <div class="tban">
    <el-row>
      <el-col :span="10" class="elspan10">
        <router-link to="/">
          <img src="../assets/images/smarttax.png" alt="">
        </router-link>
      </el-col>
      <el-col :span="12" class="elspan14">
        <el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect"
           text-color="#222" active-text-color="#FF8800" router>
          <el-menu-item v-for="(item, index) in navList" :key="index" :index="item.name">
            {{item.navItem}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2">
        &nbsp;&nbsp;
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "topbanner",
    data() {
      return {
        activeIndex: this.$store.state.global_index,
        navList:[
            {name:'/homepage',navItem:'首页'},
            {name:'/servicescope',navItem:'服务范围'},
            // {name:'/serviceprocess',navItem:'服务流程'},
            {name:'/feedback',navItem:'免费试用'},
            // {name:'/consultation',navItem:'行业资讯'},
            {name:'/aboutus',navItem:'关于我们'},
        ]
      }
    },
    methods: {
      handleSelect(keyPath) {
        this.$store.commit('changeInd',keyPath)
      }
    }
  }
</script>

<style lang="stylus">
.tban
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .el-menu.el-menu--horizontal
      border-bottom none
  .el-carousel__arrow    
      background transparent
  .el-row
    height 60px
    &>*
      height 100% 
      background #fdfdfd
    .elspan10
      display flex
      justify-content center
      align-items center
    .elspan14
      height 60px
      display flex
      justify-content flex-end
      align-items center
      .el-menu
        display flex
        background #fdfdfd
        &>*
          flex 1
</style>
