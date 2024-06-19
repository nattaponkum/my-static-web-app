<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <!-- <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Sign in with</small>
          </div>
          <div class="btn-wrapper text-center">
            <a href="#" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon"
                ><img src="img/icons/common/github.svg"
              /></span>
              <span class="btn-inner--text">Github</span>
            </a>
            <a href="#" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon"
                ><img src="img/icons/common/google.svg"
              /></span>
              <span class="btn-inner--text">Google</span>
            </a>
          </div>
        </div> -->
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Sign in with credentials</small>
          </div>
          <form role="form">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="username"
              addon-left-icon="ni ni-email-83"
              v-model="username"
            >
            </base-input>

            <base-input
              class="input-group-alternative"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="password"
            >
            </base-input>

            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Remember me</span>
            </base-checkbox>
            <div class="text-center">
              <base-button  @click="onLogin" class="my-4"
                >Sign in</base-button
              >
            </div>
            <div class="text-center text-muted mb-4" type="danger" v-if="error">
              <small>{{ error }}</small>
            </div>
          </form>
        </div>
      </div>
      <!-- <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light"><small>Forgot password?</small></a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/register" class="text-light"
            ><small>Create new account</small></router-link
          >
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import AuthenService from "@/services/AuthenService";

export default {
  name: "login",
  // components: {
  //   AuthenService
  // },
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async onLogin() {
      //   event.preventDefault();
      //   alert(JSON.stringify(this.username));
      try {
        const response = await AuthenService.login({
          username: this.username,
          password: this.password,
        });
        console.log("login token is " + response.data.token);
        console.log(response.data.user);

        await this.$store.dispatch("setToken", response.data.token);
        // if (response.data.token) {
        //   localStorage.setItem("token", JSON.stringify(response.data.token));
        // }
        await this.$store.dispatch("setUsername", response.data.user.username);
        await this.$store.dispatch("setUserStatus", response.data.user.status);
        await this.$store.dispatch("setUserID", response.data.user.id);
        await this.$store.dispatch("setUserImg", response.data.user.img);

        this.$router.push({
          name: "dashboard",
        });
      } catch (error) {
        this.error = error.response.data.error;
        this.username = "";
        this.password = "";
        console.log("Login error");
      }
    },
  },
};
</script>
<style>
</style>
