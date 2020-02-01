<template>
  <div class="home">
    <homepage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import homepage from '@/components/homepage/homepage.vue'

export default {
  name: 'home',
  components: {
    homepage
  }
}
</script>
