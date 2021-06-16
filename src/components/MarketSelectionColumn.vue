<template>
  <div :class="classes" style="position:relative">
    <a
      href="#"
      :class="{
        'odds-interval': foh,
      }"
      class="uk-position-relative"
    >
      <div style="display: flex; flex-direction:column">
        <span class="event-market-selection-odds">{{ odds }}</span>
        <span style="display: block; margin-top: 4px" class="event-market-selection-name">{{ oddsname }} {{ showsbv }}</span>
        <div
          :data-odds="odds"
          class="cart-item"/>
      </div>

    </a>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    eventmin: Object,
    islive: Boolean,
    matchid: Number,
    oddsid: String,
    selectionid: String,
    selectionitem: Object,
    ibs: Boolean,
    active: Boolean,
    isoutright: Boolean,
    marketid: Number,
    marketuid: String,
    marketname: String
  },
  data() {
    return {
      isActive: 1,
      inBetslip: false,
      classes: {
        updated: false,
        "uk-child-width-expand": true,
        deleted: false,
        sendtocart:false
      },
      latencyStyles: {
        latencyText: true,
        latencyHide: true
      }
    };
  },
  computed: {
    odds() {
      return this.selectionitem.o != undefined
        ? this.selectionitem.o
        : this.selectionitem.Odd;
    },
    oddsname() {
      let _item = this.item;
      return _item.n != undefined ? _item.n : _item.Outcome;
    },
    foh() {
      if (this.selectionitem.foh) {
        return true;
      }
      return false;
    },
    showsbv() {
      return;
    },
    item() {
      return this.selectionitem;
    }
  },
  mounted: function () {
  },
  methods: {
    getSbv(selection) {
      if (selection.sbv) return "&sbv=" + selection.sbv;

      return "";
    },
    getSelectionName(selectionitem) {
      try {
        return selectionitem.n;
      } catch {}
      return "";
    },
    getSpecifierParam(selectionitem) {
      try {
        if (selectionitem.Specifier) {
          return "&sp=" + selectionitem.Specifier;
        }

        if (selectionitem.sp) {
          return "&sp=" + selectionitem.sp;
        }
      } catch {}
      return "";
    },
    getID(theSelection) {
      try {
        return theSelection.i ? theSelection.i : 0;
      } catch (error) {
        return 0;
      }
    },
    isSelected() {
      let item = false
      if (item) {
        this.inBetslip = true;
        return true;
      }


      this.inBetslip = false;
      return false;
    },
  },
};
</script>

<style lang="scss">
:root {
  --el-x: 105px;
  --el-y: 75px;
}
@keyframes updated {
  from {
    background-color: #00e09c;
  }
  /*to {
    background-color: currentColor;
  }*/
}
@keyframes xAxis {
  100% {
    transform: translateX(calc(100vw - var(--el-x) - 165px));
  }
}

@keyframes yAxis {
  100% {
    transform: translateY(calc(100vh - var(--el-y) - 90px));
  }
}


.updated.uk-child-width-expand a {
  animation-name: updated;
  animation-duration: 1s;
}

  .latencyText {
    font-weight: 100;
    position: absolute;
    font-size: .8em;
    opacity: .2;
    right: 8px;
    top: 10px;
  }

  .latencyHide {
    opacity: 0
  }

.market-selection-item > a,
.event-market-selection-item > a {
  text-decoration: none !important;
  position: relative;
  font-family: urbane-rounded, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 65px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 600;
  min-height: 34px;
  line-height: 1;
  height: 100%;
  color: #fff;
  border-color: transparent;
  background: #000;
  border-radius: 4px;
  text-align: center;
  margin-right: 4px;
  font-size: 0.85rem;
  transition: all 0.4s ease-in;
  cursor: pointer;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
  &:focus {
    outline: 0;
  }
  .cart-item {
    z-index:-1;
    position: absolute;
    height: 24px;
    width: 24px;
    bottom: 0px;
    left: 50%;
    &:before {
      content: attr(data-odds);
      display: block;
      line-height: 24px;
      height: 24px;
      width: 24px;
      font-size: 12px;
      font-weight: 600;
      background:  #02b3e1;
      color: white;
      border-radius: 4px;
      text-align: center;
    }
  }
}
.sendtocart {
  .cart-item {
    z-index:1000000000 !important;
    display: block;
    animation: xAxis 1s forwards cubic-bezier(1, 0.44, 0.84, 0.165);
    &:before {
      animation: yAxis 1s alternate forwards
        cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
}
.event-market-selection-item > a {
  margin-bottom: 4px;
}

.market-selection-item > .odds-interval {
  border: 2px solid #f96e00;
}

.market-selection-item > .bb-active,
.event-market-selection-item > .bb-active {
  background: #02b3e1;
}
.market-selection-item > .bb-active > div > .event-market-selection-name,
.market-selection-item > .bb-active > div > .event-market-selection-odds,
.event-market-selection-item > .bb-active > div > .event-market-selection-name,
.event-market-selection-item > .bb-active > div > .event-market-selection-odds {
  color: #fff;
}

.event-market-selection-item,
.market-selection-item {
  padding-left: 4px;
  padding-right: 4px;
}
.market-selection-list > div > .market-selection-item {
  padding-left: 0;
  padding-right: 4px;
}

.event-market-selection-name {
  color: #fff;
  font-size: 0.6rem;
  display: inline-block;
  margin-left: -8px;
  margin-right: -8px;
}
</style>
