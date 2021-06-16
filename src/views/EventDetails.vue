<template>
  <div
    id="modal-match-details"
    class="uk-modal-full uk-modal uk-open uk-display-block"
    >
    <div
      class="uk-modal-dialog"
      style="background:#1D5769;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);">
      <!--Ribbon
        header="Match Details"
        :modal="false"
        @closedetails="closeDetails()"
        modal-id="modal-match-details"
      /-->
      <div
        class="uk-modal-body"
        style="padding:0;"
        >
        <div
          class="uk-padding-small"
          style="min-height:100vh;padding-bottom: 100px;">
            <div
              v-if="eventmin!=null"
              class="uk-width-expand">
              <ul
                class="uk-breadcrumb uk-flex-center"
                style="margin-bottom:0px;flex-wrap:nowrap;overflow:hidden;">
                <li>
                  <a
                    :href="'/sport/'+eventmin.sid+'/category/'+eventmin.cid"
                    class="uk-reset-link"
                    style="font-size:0.7rem;text-decoration: underline;">
                    {{ eventmin.lcn }}
                  </a>
                </li>
                <li>
                  <a
                    :href="'/sport/'+eventmin.sid+'/category/'+eventmin.cid+'/subcategory/'+eventmin.tid"
                    class="uk-reset-link"
                    style="font-size:0.7rem;text-decoration: underline;">
                    {{ eventmin.ltn }}
                  </a>
                </li>
              </ul>
            </div>

            <section
              v-if="eventmin!=null"
              class="event-eventname"><strong>{{ eventmin.ht }} - {{ eventmin.at }}</strong></section>
          <div
            class="uk-flex uk-flex-wrap uk-grid uk-grid-small">
            <div class="uk-width-1-1">
              <div id="sr-widget"/>
            </div>
              <div
                v-if="(theEvent) && eventmin!=null"
                class="uk-width-1-1">
                <EventOdds
                  v-if="eventmin"
                  :theevent="theEvent"
                  :ibs="eventmin.ibs"
                  :brid="eventmin.id"
                  :mid="eventmin.mid"
                  :minified="true"/>
              </div>
              <div
                v-else
                class="uk-text-center">This game is not available anymore!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import EventOdds from '@/components/EventOdds.vue'
export default {
  components: {
    EventOdds
  },
  beforeRouteLeave(to, from, next) {
    this.show = true
    setTimeout(function(){
      next()
    },100)
  },
  data(){
    return {
      show: false,
      brid: this.$route.params.id,
      eventmin: {},
      theEvent: {}
    }
  },
  async mounted(){
    let ed = await this.axios.get('https://dev.bongobongo.ke/api/uof/match/event/byId?eventid='+this.$route.params.id+'&siteid=2&timeOffset=180')
    this.eventmin = ed.data.eventMin[0]
    this.theEvent = ed.data
  },
  name: 'EventDetails',
}
</script>
