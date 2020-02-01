<template>
  <div v-cloak>
    <topbanner></topbanner>
    <div class="feedback">
      <div class="backgroundImg">
        <h3>申请免费试用</h3>
        <div class="inputdiv">
          <i class="myicon el-icon-user"></i><el-input class="username" v-model="username" placeholder="请输入姓名"></el-input>
        </div>
        <div class="inputdiv">
          <i class="myicon el-icon-mobile"></i><el-input class="username" v-model="userphone" placeholder="请输入号码"></el-input>
        </div>
        <div class="inputdiv">
          <i class="myicon el-icon-reading"></i><el-input class="userwords" type="textarea" placeholder="请输入需求内容" v-model="userwords" maxlength="500" show-word-limit></el-input>
        </div>
        <el-button @click="sendback()">提交</el-button>
      </div>
    </div>
    <mycontantus></mycontantus>
  </div>
</template>

<script>
import topbanner from '../topbanner.vue'
import mycontantus from '../contantus.vue'
export default {
  name: "myfeedback",
  data(){
    return {
      username: "",
      userphone: "",
      userwords: ""
    }
  },
  components: {
    topbanner,
    mycontantus
  },
  methods:{
    sendback(){
      if(!this.username){
        alert("请填写姓名")
        return false
      }
      if(!this.userphone){
        alert("请填写号码")
        return false
      }else{
        if (!(/^1[3456789]\d{9}$/.test(this.userphone))) {
          alert("手机号码有误，请重填");
          return false;
        }
      }
      if(!this.userwords){
        alert("请填写内容")
        return false
      }
      
      this.$alert('我们已收到您的提交，感谢您的支持！', '系统提示', {
          confirmButtonText: '确定',
          callback: () => {
            this.username = this.userphone = this.userwords = ""
          }
      });
    }
  }
}
</script>

<style lang="stylus">
.feedback
  height 700px
  width 100%
  background url(../../assets/images/feedback.png) 0px 0px
  overflow hidden
  margin-top 60px
  .backgroundImg
    height 500px
    width 600px
    margin 50px auto 0
    padding 50px
    background rgba(55, 55, 55, 0.1)
    h3
      width 100%
      text-align center
      font-size 25px
      font-weight 600
      color #444
      margin-bottom 50px
    .inputdiv
      width 355px
      display flex
      justify-content space-around
      align-items center
      margin 20px auto
      .myicon
        width 20px
        margin 0px 20px
      .el-input
        flex 1
      .myicon
        content "\e6e3"
        font-size 27px
      .el-textarea__inner:hover,.el-textarea__inner
        border-color #C0C4CC
        color #000
      .userwords
        width 295px
  .el-button
    display block
    width 180px
    margin 80px auto 0
</style>
