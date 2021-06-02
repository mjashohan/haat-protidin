<template>
  <div class="container-fluid">
    <my-header/>
    <img :src="images" :alt="images">
    <div id="login">
      <h2>GROW YOUR BUSINESS WITH US</h2>
      <div class="others">
        <v-btn color="#ef5023" style="color:white;width: 40%;border-radius: 5px; padding: 15px;text-decoration: none" href="#/WholeRegister"><strong>REGISTER AS A WHOLESELLER</strong></v-btn><br><br><br>
        <v-btn color="#ef5023" style="color:white;width: 30%;border-radius: 5px; padding: 15px;text-decoration: none" href="#"><strong>RENEW</strong></v-btn>
      </div>
      <div id="wholLog">
        <input type="text" placeholder="Number"><br><br>
        <input type="password" placeholder="Password"><br><br>
        <v-btn color="#ef5023" style="color:white;width: 30%;border-radius: 5px" @click="login"><strong>Sign In</strong></v-btn>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: "Wholeseller",
  data(){
    return{
      images: [
        "/static/sliders/Shohun.jpg"
      ],
      phone:'',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      let response
      try {
        response = await AuthenticationService.login({
          phone: this.phone,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-bottom: 40px;
}
h2 {
  text-align: center;
  color: #ef5023;
  font-weight: bolder;
  padding-bottom: 35px;
  width: 90%;
}
#login {
  margin: auto;
  width: 40%;
  padding-bottom: 20px;
}
input {
  border-radius: 5px;
  border: none;
  background-color: #F7A691;
  color: #7B5349;
  font-weight: bolder;
}
#wholLog {
  border-right: 3px solid #ef5023;
  width: 40%;
  padding-left: 10px;
}
.others{
  float: right;
  width: 50%;
}
</style>
