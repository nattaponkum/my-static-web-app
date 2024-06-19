<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <!-- <div class="card-header bg-transparent pb-5">
                    <div class="text-muted text-center mt-2 mb-3">
                        <small>Sign up with</small>
                    </div>
                    <div class="btn-wrapper text-center">
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                            <span class="btn-inner--text">Github</span>
                        </a>
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                            <span class="btn-inner--text">Google</span>
                        </a>
                    </div>
                </div> -->
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Sign up with credentials</small>
                    </div>
                    <form role="form">

                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Username"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.username">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="model.email">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    placeholder="Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.password">
                        </base-input>

                        <!-- <div class="text-muted font-italic">
                            <small>password strength: <span class="text-success font-weight-700">strong</span></small>
                        </div> -->

                        <!-- <div class="row my-4">
                            <div class="col-12">
                                <base-checkbox class="custom-control-alternative">
                                    <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                                </base-checkbox>
                            </div>
                        </div> -->
                        <div class="text-center">
                            <base-button type="primary" class="my-4" @click="createUser()">Create account</base-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <!-- <a href="#" class="text-light">
                        <small>Forgot password?</small>
                    </a> -->
                </div>
                <!-- <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Login into your account</small>
                    </router-link>
                </div> -->
            </div>
            <div class="col-4 text-center">
                <modal v-bind:show="modals.modal0">
                <div>
                    User {{ model.username }} have successfully created.
                </div>
                <template v-slot:footer>
                    <base-button type="secondary" @click="modals.modal0 = false">Close</base-button>
                    <!-- <base-button type="primary" @click="$router.push({name: 'login'})">Login</base-button> -->
                </template>
                </modal>
            </div>
        </div>
        
    </div>
</template>
<script>
  import UserService from "@/services/UserService.js"
  export default {
    name: 'register',
    data() {
      return {
        model: {
          username: '',
          email: '',
          password: ''
        },
        modals: {
            modal0: false
        }
      }
    },
    methods:{
        async createUser() {
            try {
                await UserService.post(this.model)
                this.$data.modals.modal0 = !this.$data.modals.modal0
            } catch (err) {
                console.log(err)
            }
        }
    }
  }
</script>
<style>
</style>
