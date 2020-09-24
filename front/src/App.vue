<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
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
  created() {
    this.$store.state.userProfil = JSON.parse(
      localStorage.getItem("userProfil")
    );
    console.log(this.$store.state.userProfil);
    if (localStorage.getItem('token') == "") {
      this.$router.push({name :"home"});
    }
  },
};
</script>
<style scoped>
*{
  font-family: Open Sans,Lato,sans-serif !important;
}

.all {
  padding: 0;
  margin: 0;
  min-height: 100vh;
 /* background:  #252e38; */
  background: #f2f5f8;
}
</style>
