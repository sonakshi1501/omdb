<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" tag="a" to="/">MOVIE</router-link>
      <small class="text-center" style="color: white"
        >{{ isLoggedin ? `Welcome ${user.name}` : "Login to View" }}
      </small>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMobile"
        aria-controls="navbarMobile"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMobile">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/"
              tag="a"
              class="nav-link"
              active-class="active"
              exact
            >
              Search
            </router-link>
          </li>
          <li class="nav-item">
            
            <router-link
            v-if="isLoggedin"
              to="#"
              tag="a"
              class="nav-link"
              active-class="active"
              exact
              @click="logout"
            >
              Logout
            </router-link>
            <router-link
            v-else
              to="/login"
              tag="a"
              class="nav-link"
              active-class="active"
              exact
            >
             Login
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  data: () => ({
  }),
    computed: {
    ...mapState(["user", "isLoggedin"]),
  },
  methods:{
    ...mapMutations([ "userChange","userLoginChange"]),
      logout() {
        this.userChange({});
        this.userLoginChange(false);
        localStorage.removeItem("user")
      }
  }
};
</script>