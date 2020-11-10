<template>
  <v-app>
    <app-header
      v-if="!hide"
    ></app-header>
    <router-view></router-view>
    <app-footer
      v-if="!hide"
    ></app-footer>
  </v-app>
</template>

<script>
import Header from "./components/All/Header";
import Footer from "./components/All/footer";
export default {
  name: "App",

  components: {
    appHeader: Header,
    appFooter: Footer,
  },

  data: () => ({
    //
  }),
  computed: {
    hide() {
      return this.$route.path === "/logIn" || this.$route.path === "/signUp";
    },
  },
  created() {
    this.$store.state.userProfil = JSON.parse(
      localStorage.getItem("userProfil")
    );

    if (localStorage.getItem("token") == "") {
      this.$router.push({ name: "home" });
    }
  },
};
</script>
<style scoped>
* {
  font-family: "poppins-bold", sans-serif !important;
}

.all {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  /* background:  #252e38; */
  background: #f2f5f8;
}
</style>
