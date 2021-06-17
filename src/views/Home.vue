<template>
  <div class="home">
    <div
      v-if="!show">
      <div
        v-for="sport in listObject.sports"
        :key="sport.id">
        <div>{{ sport.sportName }}</div>
        <div
          v-for="ev in sport.eventMin"
          :key="ev.id">
          <MarketItem 
            :eventmin="ev"
          />
          
        </div>
      </div>
    </div>
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import MarketItem from '@/components/MarketItem.vue'

export default {
  
  data(){
    return {
      show: false,
      listObject: {}
    }
  },
  name: 'Home',
  components: {
    MarketItem
  },
  async mounted(){
    let lo = await this.axios.get('https://dev.bongobongo.ke/api/uof/match/event/ListAllEvents?includePreEvents=true&nrOfPre=20&SportId=1&marketId=1&lastKey=&siteid=1&timeOffset=180')
    this.listObject = lo.data
  }
}
</script>
