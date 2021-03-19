<template>
  <div class="container-fluid">
    <my-header/>
    <side-nav/>
    <search-bar></search-bar>
    <div style="padding-left:150px">
      <slide-img/>
    </div>
    <prod-list/>
    <my-footer/>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
