<template>
  <div>
    <h1>Event {{ $route.params.id }}</h1>
  </div>
</template>
<script>

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
      listObject: {}
    }
  },
  name: 'EventDetails',
}
</script>
