<template>
  <div class="section">
    <div class="container d-flex justify-content-center">
    <form class="form-signin col-md-6 col-12 ml-a" @submit.prevent="sendFormData">
      <div class="text-center mt-4 mb-4">
        <h1 class="h3 mt-3 mb-3 font-weight-normal">Авторизация</h1>
      </div>

      <div class="form-label-group">
        <input type="email" v-model="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <label for="inputPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block">Sign in</button>
      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
    </div>
  </div>
</template>
<style scoped>
  .section{
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
    height: 100vh;
  }
</style>
<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data(){
    return{
      email: "",
      password: ""
    }
  },
  methods:{
    ...mapActions("auth",["login"]),
    sendFormData(){
      if(this.email.length > 0 && this.password.length > 0)
      {
          this.login({email:this.email, password:this.password});
      }
    }
  }
}
</script>
