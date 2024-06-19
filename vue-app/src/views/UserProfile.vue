<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="
        min-height: 600px;
        background-image: url(img/theme/teamwork.png);
        background-size: cover;
        background-position: center top;
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-egat opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-10 col-md-10">
            <h1 class="display-2 text-white">
              Hello {{ model.name }} {{ model.lastname }}
            </h1>
            <!-- <p class="text-white mt-0 mb-5">
              This is your profile page.
            </p> -->
            <!-- <a href="#!" class="btn btn-info">Edit profile</a> -->
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-if="model.gender=='female'"
                      src="img/profile/ic_profile.png"
                      class="rounded-circle"
                    />
                    <img v-else
                      src="img/profile/ic_profile.png"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <!-- <div class="d-flex justify-content-between">
                <base-button size="sm" type="info" class="mr-4"
                  >Connect</base-button
                >
                <base-button size="sm" type="default" class="float-right"
                  >Message</base-button
                >
              </div> -->
            </div>
            <div class="card-body pt-0 pt-md-4">
              <!-- <div class="row">
                <div class="col">
                  <div
                    class="card-profile-stats d-flex justify-content-center mt-md-5"
                  >
                    <div>
                      <span class="heading">22</span>
                      <span class="description">Friends</span>
                    </div>
                    <div>
                      <span class="heading">10</span>
                      <span class="description">Photos</span>
                    </div>
                    <div>
                      <span class="heading">89</span>
                      <span class="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="text-center">
                <h3>{{ model.name }} {{ model.lastname }}</h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>{{ model.city }},
                  {{ model.country }}
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>
                  {{ model.position }}
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>
                  {{ model.workplace }}
                </div>
                <hr class="my-4" />
                <p>
                  {{ model.about }}
                </p>
                <a href="#">Show more</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-8 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">My account</h3>
                </div>
                <div class="col-4 text-right">
                  <base-button type="primary" @click="editUser()">
                    Save
                  </base-button>
                </div>
                <div class="col-4 text-center">
                  <modal v-bind:show="modals.modal0">
                    <div>
                      Your profile have successfully updated.
                    </div>
                    <template v-slot:footer>
                        <base-button type="secondary" @click="modals.modal0 = false">Close</base-button>
                    </template>
                  </modal>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <h6 class="heading-small text-muted mb-4">User information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Username"
                        placeholder="Username"
                        input-classes="form-control-alternative"
                        v-model="model.username"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Email address"
                        placeholder="jesse@example.com"
                        input-classes="form-control-alternative"
                        v-model="model.email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="First name"
                        placeholder="First name"
                        input-classes="form-control-alternative"
                        v-model="model.name"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Last name"
                        placeholder="Last name"
                        input-classes="form-control-alternative"
                        v-model="model.lastname"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">
                  Contact information
                </h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <base-input
                        alternative=""
                        label="Address"
                        placeholder="Home Address"
                        input-classes="form-control-alternative"
                        v-model="model.address"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="City"
                        placeholder="City"
                        input-classes="form-control-alternative"
                        v-model="model.city"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Country"
                        placeholder="Country"
                        input-classes="form-control-alternative"
                        v-model="model.country"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Postal code"
                        placeholder="Postal code"
                        input-classes="form-control-alternative"
                        v-model="model.zipCode"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">About me</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <base-input 
                      alternative="" 
                      label="About Me" 
                      input-classes="form-control-alternative"
                      v-model="model.about">
                        <!-- <textarea
                          rows="4"
                          class="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                        ></textarea> -->
                    </base-input>
                    <base-input 
                      alternative="" 
                      label="Workplace" 
                      input-classes="form-control-alternative"
                      v-model="model.workplace">
                    </base-input>
                    <base-input 
                      alternative="" 
                      label="Position" 
                      input-classes="form-control-alternative"
                      v-model="model.position">
                    </base-input>
                  </div>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "@/services/UserService.js";
export default {
  name: "user-profile",
  data() {
    return {
      model: {
        username: "",
        gender: "",
        email: "",
        name: "",
        lastname: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        about: "",
        workplace: "",
        position: "",
        province: "",
        status: ""
      },
      modals: {
        modal0: false
      },
    };
  },
  methods:{
    async editUser () {
      try {
        await UserService.put(this.$data.model)
        // show modal successfully save user profile
        this.$data.modals.modal0 = !this.$data.modals.modal0
        console.log(this.$data.modals.modal0)
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted() {
    try {
      let userId = this.$store.getters.getState.userID
      this.$data.model = (await UserService.show(userId)).data
    } catch (error) {
      console.log (error)
    }
  },
  
};
</script>
<style></style>
