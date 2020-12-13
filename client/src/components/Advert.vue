<template>
  <div class="container">
      <div id="ad">
        <h1>AD</h1>
      </div>
  </div>
</template>

<script>
export default {
    name: "Advert"

}
</script>

<style scoped>
    #ad{
        border: 1px solid;
        height: 500px;
        width: 90px;
        background-color: black;
        color: white;
        opacity: 0.8;
        overflow: hidden;
        float: right;
        display: block;
    }
    h1{
      text-align: center;
    }
</style>