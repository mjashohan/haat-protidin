<template>
  <div id="my-footer" class="container-fluid">
      <footer>
        <nav>
      <a href="#">About</a> <a href="#">Contact</a> <a href="#">FAQ</a> 
        </nav>
      </footer>
  </div>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style scoped>
#my-footer{
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ef5023;
  color: white;
  text-align: center;
  text-decoration: none;
  word-spacing: 500px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
}
/*a{
  color: white;
  text-decoration: none;
}
a:hover{
  color:#ef5023;
  text-decoration: none;
  background-color: white;
  border-radius: 5px;
}*/

a:link, a:visited {
  color:white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
}

a:hover, a:active {
  background-color: white;
  color:#ef5023;
}
</style>