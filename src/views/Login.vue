<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="login-form bg-light mt-4 p-4">
          <form action="" method="" class="row g-3">
            <h4>Login into account</h4>
            <div v-if="status.length>0" class="alert alert-danger" role="alert">
              {{status}}
            </div>
            <div class="col-12">
              <label>Email</label>
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div class="col-12">
              <label>Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div class="col-12">
              <button
                class="btn btn-dark float-end"
                @click.stop.prevent="submit"
                @click="login"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import userService from "../service/userService";
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    status: "",
  }),
  methods: {
    ...mapMutations([ "userChange","userLoginChange"]),
    async login() {
      console.log(this.email, this.password);
      try {
        const res = await userService.loginUser(this.email, this.password);
        this.userChange(res.user);
        this.userLoginChange(res.success);
        this.$router.replace("/");
      } catch (e) {
        this.status = e.message;
        console.log(e);
      }
    },
  },
};
</script>
