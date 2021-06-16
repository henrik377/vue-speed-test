<template>

  <div class="uk-width-1-1">
    <ul
      class="uk-tab uk-width-1-1"
      uk-tab>
      <li
        v-for="marketgroup in theevent.marketGroups"
        :key="marketgroup.marketGroupId"
        :class="{'uk-active':chosenMarketGroup==marketgroup.marketGroupId}">
        <a 
          href="#"
          @click.stop.prevent="showMarketGroup(marketgroup.marketGroupId, marketgroup.showMarketName)"
        >{{ marketgroup.marketGroupName }}</a>
      </li>
    </ul>
    <div
      v-for="market in theevent.eventMin[0] ? theevent.eventMin[0].odds: []"
      :key="market.uid"
      :class="{'uk-hidden':!market.groups.includes(chosenMarketGroup)}">
      <h5 v-if="showMarketName && (chosenMarket==0 || chosenMarket==market.uid)" class="uk-margin-top uk-margin-small">{{ market.n }}  </h5>
      <div 
        v-if="chosenMarket==0 || chosenMarket==market.uid"
        :id="market.uid"
        class="uk-flex uk-flex-wrap uk-child-width-1-3 uk-text-center">
        <div 
          v-for="sel in market.m"
          :key="market.uid + '_' + sel.id"
          :id="brid+'-'+market.id"
          class="uk-child-width-expand uk-position-relative">
          <!--MarketSelectionColumn
            :key="getselectionid(sel, market.uid)"
            :matchid="theevent.eventMin[0].id"
            :oddsid="sel.id"
            :selectionid="getselectionid(sel, market.uid)"
            :selectionitem="sel"
            :marketname="market.n"
            :marketid="market.id"
            :marketuid="market.uid"
            :eventmin="theevent.eventMin[0]"
            :islive="true"
            :ibs="market.ibs"
            @add-to-betslip="addtobetslip"
            @remove-from-betslip="removefrombetslip"
            class="event-market-selection-item"
            :class="sel.col"
          /-->
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
//import MarketSelectionColumn from '@/components/sportsbook/MarketSelectionColumn.vue'
export default {
  components: {
    //MarketSelectionColumn,
  },
  props: {
    theevent: Object,
    ibs: Boolean,
    brid: Number,
    mid: Number,
    minified: Boolean
  },
  data () {
    return {
      chosenMarketGroup: 'Main',
      chosenMarket: 0,
      showMarketName: true
    }
  },
  methods:{
    setChosenMarket(){

    },
    showMarketGroup(key, showMarketName){
      this.chosenMarket = 0
      this.chosenMarketGroup = key
      this.showMarketName = showMarketName;
    },
    getselectionid:function(sel, uid){
      let _id = this.theevent.eventMin[0].id + '-' + sel.id;
      if(uid) 
      {
        _id = _id + '-' + uid;
      }
      return _id;
    }
  }
}

</script>

<style>
.hd{
  visibility:hidden;
}
.go-to-betslip{
  background:#00E09C;
  padding: 4px;
  color:#fff;
}
.bs-error{
  background:#EDBD5A;
  padding: 4px;
  color:#fff;
}
</style>