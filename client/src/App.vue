<template>
  <div id="app" class="container-fluid">
    
    <div id="header">
          <img src="./assets/logo.png" id="logo"><br /><br />
    </div>
  <div id="footer" class="p-4">

  </div>
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
#logo{
  width: 400px;
  display: block;
  margin-left: 0%;
  margin-right: 100%;
}
#header{
 background-color: #ef5023;
}
#footer{
  background-color: #ef5023;
  margin-top: 100%;
  margin-bottom: 0%;
}
</style>
