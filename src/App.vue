<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/core/Header.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapState(["user", "isLoggedin"]),
  }
};
</script>