<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="(trajet, index) in trajet" :key="index">
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" alt=""
            /></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">
                <span class="userStyle">
                  {{ trajet.username }}
                  <v-icon
                    style="font-size: 21px;"
                    @click="getProfilAnonce(index)"
                    >mdi-eye</v-icon
                  ></span
                >
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ trajet.time }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span>
                  <v-icon>mdi-map-marker-circle</v-icon>
                  {{ trajet.depart }}</span
                >
                |
                <span>
                  <v-icon>mdi-flag-checkered</v-icon>
                  {{ trajet.arrive }}</span
                >
              </v-list-item-title>
              <v-list-item-title style="    margin-top: 11px;">
                <v-chip x-small
                  >bagage :{{ trajet.bagage ? "oui" : "non" }}</v-chip
                >

                <v-chip x-small class="ml-1">
                  {{ trajet.nbrePlace }} places</v-chip
                >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-btn
            tile
            rounded
            dark
            color="deep-purple accent-4"
            width="100%"
            @click="reservation(index)"
            >reserver</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    props:['trajet','recherche'],
  data() {},
  methods: {
    reservation(index) {
      if (this.tabs == "chauffeur") {
        axios.post("reservation/res", {
          idPoster: this.trajetChauffeur[index],
          idLogger: this.$store.state.userProfil._id,
        });
      }
      if (this.tabs == "passenger") {
        axios.post("reservation/res", {
          idPoster: this.trajetPassenger[index],
          idLogger: this.$store.state.userProfil._id,
        });
      }
    },
    getProfilAnonce(index) {
      
        axios
          .get("user/" + this.trajet[index].idUserPoster)
          .then((res) => {
            // var anounceProfil = res.data;
            (this.username = res.data.username),
              (this.phone = res.data.phone),
              (this.carModel = res.data.carModel),
              (this.fumer = res.data.fumer),
              (this.climat = res.data.climat),
              (this.rating = res.data.rating),
              (this.dialog = true);
          });
    
        
 
    },
  },
};
</script>
