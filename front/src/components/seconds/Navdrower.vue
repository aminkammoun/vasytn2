<template>
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
      <v-list-item>
        <router-link to="/ajoutTrajet" class="navLink"
          >ajouter trajet</router-link
        >
      </v-list-item>
      <v-list-item>
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
</template>
<script>
export default {
    prop:{
        drawer : false
    },
}
</script>
<style scoped>
a {
  color: #000 !important;
  text-decoration: none !important;
}
</style>
