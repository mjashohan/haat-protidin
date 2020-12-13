<template>
  <div id="app" class="container-fluid">
    <my-header/>
    <side-nav/>
    
    <div style="padding-left:120px">  
      <slide-img/>
    </div>
    <prod-list/>
    <my-footer/>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
