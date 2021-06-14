<template>
  <div class="home">
    <div>
      <a href="/about">Kuken</a>
    </div>
    <div
      v-for="index in 1000"
      :key="index"
      v-once>
      <router-link to="/about">{{ index }}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    this.axios.get('https://dev.bongobongo.ke/api/uof/match/event/ListAllEvents?includePreEvents=true&nrOfPre=20&SportId=1&marketId=1&lastKey=&siteid=1&timeOffset=180')
  }
}
</script>
