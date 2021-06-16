<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div v-if="show">Loading...</div>
    <router-view/>
  </div>
</template>
<script>
export default{
  watch: {
    $route(to, from) {
      this.show = true
      var _this = this
      setTimeout(function(){
        _this.show = false
      }, 2000)
    }
  },
  data(){
    return {
      show: false
    }
  },
}
</script>


<style>
@import 'https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/css/uikit.min.css';
</style>
