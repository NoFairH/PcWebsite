import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    global_index: "1",
    ifanimate: true
  },
  mutations: {
    changeInd(state,num){
      state.global_index = num
    },
    doanimate(){
      this.state.ifanimate = false
      console.log(this.state.ifanimate);
    }
  },
  actions: {
  },
  modules: {
  }
})
