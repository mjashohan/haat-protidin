<template>
  <div class="container-fluid">
    <my-header/><br><br>
    <div id="registration">
      <div class="dialogues">
        <h3 class="hd">REGISTER AS A MANUFACTURER</h3>
      </div><br>
      <div class="form">
        <table width="100%">
          <tr>
            <td><label for="name">NAME:</label></td>
            <td><input type="text" name="name" id="name" required></td>
          </tr>
          <tr>
            <td><label for="name">BUSINESS NAME:</label></td>
            <td><input type="text" name="bname" id="bname" required></td>
          </tr>
          <tr>
            <td><label for="name">LOCATION:</label></td>
            <td><input type="text" placeholder="District/Upazilla/Area/Others" name="location" id="location" required></td>
          </tr>
          <tr>
            <td><label for="name">ADDRESS:</label></td>
            <td><input type="text" name="addr" id="addr" required></td>
          </tr>
          <tr>
            <td><label for="name">MOBILE NUMBER:</label></td>
            <td><input type="text" name="mob" id="mob" required></td>
          </tr>
          <tr>
            <td><label for="name">EMAIL (OPTIONAL):</label></td>
            <td><input type="text" name="email" id="email" required></td>
          </tr>
          <tr>
            <td><label for="name">NID NUMBER:</label></td>
            <td><input type="text" name="nid" id="nid" required></td>
          </tr>
          <tr>
            <td><label for="name">PHOTO (OPTIONAL):</label></td>
            <td><input type="text" name="photo" id="photo" required></td>
          </tr>
          <tr>
            <td><label for="name">PRODUCT CATEGORY:</label></td>
            <td><input type="text" name="prodCat" id="prodCat" required></td>
          </tr>
          <tr>
            <td><label for="name">PASSWORD:</label></td>
            <td><input type="password" name="pass" id="pass" required></td>
          </tr>
        </table><br><br>
      </div>
      <div id="bakita">
        <h4 class="dialogues hd" style="font-weight: normal">CHOOSE A PAYMENT PLAN</h4><br><br>
        <div id="extra">
          <v-btn color="#ef5023" style="color:white;width: 6em;height: 6em;border-radius: 5px"><strong>WEEKLY</strong></v-btn>
          <v-btn color="#ef5023" style="color:white;width: 6em;height: 6em;border-radius: 5px"><strong>MONTHLY</strong></v-btn>
          <v-btn color="#ef5023" style="color:white;width: 6em;height: 6em;border-radius: 5px"><strong>YEARLY</strong></v-btn>
        </div>
      </div><br>
      <div class="form2">
        <label for="referralID">REFERRAL ID (IF ANY):</label><br>
        <input type="text" name="referralID" id="referralID"><br>
        <label for="link">LINK/IP (OPTIONAL):</label><br>
        <input type="text" name="link" id="link"><br>
      </div><br>
      <input type="submit" value="Submit" id="button" v-on:mouseover="design" v-on:mouseleave="nodesign" style="text-align: center;border: 1px solid #ef5023;color: #ef5023 ">
      <br><br><br>
    </div>
    <my-footer/>
  </div>
</template>

<script>
export default {
  name: "ManufRegister",
  methods: {
    design: ()=>{
      document.getElementById('button').style.backgroundColor = '#ef5023'
      document.getElementById('button').style.color = 'white'
    },
    nodesign: ()=>{
      document.getElementById('button').style.backgroundColor = 'white'
      document.getElementById('button').style.color = '#ef5023'
    }
  }
}
</script>

<style scoped>
.dialogues{
  background-color: #ef5023;
  width: 30%;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto;
}
.hd{
  color: white;
  padding-bottom: 15px;
  padding-top: 15px;
  font-weight: bold;
}
.form{
  margin-left: 30%;
  color: #ef5023;
  font-size: 22px;
  width: 50%;
}
input{
  border-radius: 10px;
  border: 1px solid #ef5023;

  text-align: left;
}
input[type=submit] {
  width: 10em;
  height: 3em;
  border-radius: 0px;
  margin-left: 42.5%;
  margin-right: auto;
  display: block;
  font-size: 22px;
}
#bakita{
  display: inline;
  float: inherit;
}
#extra{
  margin-left: 40%;
}
.form2{
  margin-left: 43%;
  color: #ef5023;
  font-size: 16px;
  width: 50%;
}
</style>
