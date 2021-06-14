<template>
  <div class="about">
    <div
      v-if="!show">
      <h1>This is an about page</h1>
    </div>
    <h1 v-else>Loading...</h1>
  </div>
</template>
<script>
export default{
  beforeRouteLeave(to, from, next) {
    this.show=true
    next()
  },
  data(){
    return {
      show: false
    }
  },
}
</script>

