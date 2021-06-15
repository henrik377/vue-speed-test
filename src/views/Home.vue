<template>
  <div class="home">
    <div
      v-if="!show">
      <div>
        <router-link to="/about">Kuken</router-link>
      </div>
      <div
        v-for="index in ii"
        :key="index">
        <router-link to="/about">{{ index }}</router-link>
      </div>
    </div>
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  beforeRouteLeave(to, from, next) {
    this.show = true
    setTimeout(function(){
      next()
    },100)
  },
  data(){
    return {
      show: false,
      ii: 1
    }
  },
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    this.ii = 200
    //this.axios.get('https://dev.bongobongo.ke/api/uof/match/event/ListAllEvents?includePreEvents=true&nrOfPre=20&SportId=1&marketId=1&lastKey=&siteid=1&timeOffset=180')
  }
}
</script>
