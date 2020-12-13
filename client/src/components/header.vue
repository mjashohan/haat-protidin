<template>
  <div id="header" class="container-fluid">
      <header>
          <p class="info">+88 013 5048 9022 &nbsp;&nbsp;&nbsp;&nbsp;haatprotidin@gmail.com</p>
          <p class="info">Bookmark | বাংলা</p>
          <img src="../assets/logo.png" id="logo">
          <nav class="navbar navbar-default">
            <div class="container">
                <a href="/">Home</a> <a href="#">Retailer</a> <a href="#">Wholeseller</a> <a href="#">Manufacturer</a> <a href="#">Get App</a>
                <!-- <router-link class="route" to="/" exact>Home</router-link> <router-link class="route" to="/">Retailer</router-link> <router-link class="route" to="/" exact>Wholeseller</router-link> <router-link class="route" to="/" exact>Manufacturer</router-link> <router-link class="route" to="/" exact>Get App</router-link> -->
            </div>
          </nav>
    </header>
  </div>
</template>

<script>
export default {
    name: 'header'
}

</script>

<style scoped>
#logo{
  width: 400px;
  display: block;
  margin-left: 0%;
  margin-right: 100%;
}
#header{
  background-color: #ef5023;
  left: 0;
  bottom: 0;
  width: 100%;
  font-weight: bold;
}
.info{
    color: white;
    text-align: right;
}
a:link, a:visited {
  color:white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  font-size: 16;
}

a:hover, a:active {
  background-color: white;
  color:#ef5023;
}

</style>
