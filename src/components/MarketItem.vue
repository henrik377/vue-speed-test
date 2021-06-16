<template>
  <div>
    <div class="uk-width-1-1 uk-flex uk-flex-middle bb-game-info">
      <div
        class="uk-width-expand uk-flex uk-flex-middle">
        <span
          v-if="eventmin.isLive"
          class="uk-icon"
          v-html="svglive"/>
        <ul
          class="uk-breadcrumb bb-marketitem-breadcrumb uk-margin-remove">
          <li
            class="overflow-300"
          >{{ eventmin.lcn }}
          </li>
          <li
            class="overflow-300">
              {{ eventmin.ltn }}
          </li>
        </ul>
      </div>
      <!--div class="bb-day-date">
        <template v-if="eventmin.isLive">
          {{ eventmin.ms }}
          <span
            v-if="eventmin.mt"
            class="bb-game-time">{{ eventmin.mt }}<span class="bb-blink">'</span></span>
        </template>
        <template v-else>
          {{ showDay(eventmin.edtlocale) }} <span class="bb-game-time">{{ showTime(eventmin.edtlocale) }}</span>
        </template>
      </div-->
    </div>
    <div class="uk-flex uk-flex-wrap">
      <!--Market selection-->
      <div
        class="uk-width-1-1 market-selection uk-match-height uk-grid uk-grid-collapse uk-flex-top" >

        <div
          class="uk-width-expand team-name"
        >
          <a
            :href="'/event/'+eventmin.id"
            @click.stop.prevent="$router.push('/event/'+eventmin.id)"
            class="uk-link-reset">
            <div
              v-if="eventmin.isLive"
              class="uk-text-center uk-inline-block">
              <div class="score">{{ eventmin.sc.split(':')[0] }}</div>
              <div class="score">{{ eventmin.sc.split(':')[1] }}</div>
            </div>
            <div
              class="uk-inline-block">
              <div>{{ eventmin.ht }}</div>
              <div>{{ eventmin.at }}</div>
            </div>
            <div class="uk-flex uk-flex-middle">
              <span style="color:#ccc; font-size:.7rem; font-weight:normal;padding-right:.5rem" v-if="eventmin.sms">ID: {{eventmin.sms}}</span>
            </div>
          </a>
        </div>

          <div
            class="market-selection-list uk-flex uk-flex-middle uk-flex-right uk-flex-wrap uk-width-expand">
            <div
              v-for="(odds, index) in eventmin.odds"
              :key="index"
              class="uk-width-1-1 uk-flex uk-flex-wrap uk-position-relative">
              
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarketItem',
  props: {
    eventmin: Object
  }
}
</script>