<template>
  <div class="container search-container">
    <form action="">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    <!--  <ul id="theMenu">
        <li>Categories</li>
        <li>Location</li>
      </ul> -->
      <div id="theMenu">
        <button type="submit">Categories</button><br>
        <button type="submit">Location</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
name: "SearchBar"
}
</script>

<style scoped>
 /** #theMenu button{
    color: #ef5023;
    text-decoration: none;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-weight: bolder;
  } **/
  #theMenu button{
    padding: 5px;
    text-decoration: none;
    background-color: #ef5023;
    color: white;
    font-weight: bolder;
    width: 80%;
    border-radius: 10px;
  }
  .search-container{
    float: left;
  }
  .search-container button{
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }
  .search-container button:hover{
    background: #ccc;
  }
  @media screen and (max-width: 600px) {
     .search-container {
      float: none;
    }
    .search-container input[type=text], .search-container button{
      float: none;
      display: block;
      text-align: left;
      width: 100%;
      margin: 0;
      padding: 14px;
    }
  }
</style>
