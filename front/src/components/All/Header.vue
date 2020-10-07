<template>
  <div style="heigth:80%;">
    <v-app-bar dense   color="#1976d2" class=".d-md-none .d-lg-flex">
      <v-toolbar-title>
        <router-link to="/"
          ><img class="Logo" src="../../assets/image/monLogo.png"
        /></router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text class="ma-2 hidden-sm-and-down " @click="checkAuth">
        <v-icon color="#fff">mdi-plus</v-icon>
        <router-link to="/ajoutTrajet">ajouter trajet</router-link>
      </v-btn>
      <v-btn text class="hidden-sm-and-down" @click="checkAuth">
        <v-icon color="#fff">mdi-magnify</v-icon>
        <router-link to="/rechercheTrajet">chercher trajet</router-link>
      </v-btn>
      <v-spacer></v-spacer>

      <button text v-if="!token" class="btn hidden-sm-and-down">
        <router-link to="/logIn">sign in</router-link>
      </button>
      <button text v-if="!token" class="btn hidden-sm-and-down">
        <router-link to="/signUp">sign Up</router-link>
      </button>
      <v-btn v-if="token" text icon class="hidden-sm-and-down">
        <router-link to="/history"><v-icon>mdi-history</v-icon></router-link>
      </v-btn>
      <v-btn text v-if="token" class="hidden-sm-and-down">
        <v-icon color="#fff ">mdi-account-multiple-outline</v-icon>
        <router-link to="/profil">{{ token ? username : "" }}</router-link>
      </v-btn>
      <v-btn @click="logOut" text icon v-if="token" class="hidden-sm-and-down">
        <v-icon color="white">mdi-logout</v-icon>
      </v-btn>

      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer style="z-index:1000;" app v-model="drawer">
      <v-list>
        <template>
          <v-list-item>
            <router-link to="/profil" class="navLink" v-if="token">{{
              token ? username : ""
            }}</router-link>
            <v-spacer></v-spacer>
            <v-icon @click="drawer = false">mdi-close</v-icon>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="checkAuth">
            <router-link to="/ajoutTrajet" class="navLink" 
              >ajouter trajet</router-link
            >
          </v-list-item>
          <v-list-item @click="checkAuth">
            <router-link to="/rechercheTrajet" class="navLink" 
              >chercher trajet</router-link
            >
          </v-list-item>
          <v-list-item
            ><button text v-if="!token">
              <router-link to="/logIn" class="navLink">sign in</router-link>
            </button></v-list-item
          >
          <v-list-item>
            <router-link v-if="!token" to="/signUp" class="navLink"
              >sign Up</router-link
            >
          </v-list-item>
          <v-list-item>
            <router-link v-if="token" to="/history" class="navLink"
              >historique</router-link
            >
          </v-list-item>

          <v-list-item
            ><v-btn text @click="logOut" v-if="token">
              deconnexion
            </v-btn></v-list-item
          >
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      auth: false,
      username: "",
      drawer: false,
    };
  },
  computed: {
    token() {
      return this.getWithExpiry("token");
    },
  },
  created() {
    var userName = JSON.parse(localStorage.getItem("userProfil"));
    this.username = userName.username;
  },
  methods: {
    logOut() {
      localStorage.removeItem("userProfil");
      localStorage.removeItem("token");
      localStorage.removeItem("idUser");

      this.$router.push({ name: "home" });
      this.$router.go(0);
    },

    getWithExpiry(key) {
      const itemStr = localStorage.getItem(key);

      if (!itemStr) {
        return null;
      }
      const item = JSON.parse(itemStr);
      const now = new Date();

      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return item.value;
    },
    checkAuth() {
      if (!this.token) {
        this.$router.push("/logIn");
      }
    },
  },
};
</script>
<style scoped>
* {
  font-family: Open Sans, Lato, sans-serif !important;
}
a {
  color: #fff !important;
  text-decoration: none !important;
}
.btn {
  cursor: pointer;

  width: 113px;
  height: 39px;
  padding: 7px;
  border: none;
  border-radius: 30px;
  margin: 0 0 2px;
  color: #fff;
  flex: 0 0 auto;
}
.navLink {
  color: black !important;
}
.Logo {
  padding-top: 0px;
  width: 134px;
  height: 166px;
}
</style>
