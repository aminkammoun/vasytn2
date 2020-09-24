<template>
  <div class="all">
    <div v-if="!recheBool">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                class="px-3 pb-3"
            >
              <v-skeleton-loader
                class="mx-auto"
                max-width="350"
                type="card"
              ></v-skeleton-loader>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                class="px-3 pb-3"
            >
              <v-skeleton-loader
                class="mx-auto"
                max-width="350"
                type="card"
              ></v-skeleton-loader>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                class="px-3 pb-3"
            >
              <v-skeleton-loader
                class="mx-auto"
                max-width="350"
                type="card"
              ></v-skeleton-loader>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div v-else>
      <v-toolbar color="#252e38" dark flat dense>
        <template>
          <v-tabs centered>
            <v-tab @click="tabs = 'chauffeur'">chauffeur</v-tab>
            <v-tab @click="tabs = 'passenger'">passager</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-container v-if="tabs == 'chauffeur'">
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="(trajet, index) in trajetChauffeur"
            :key="index"
          >
            <v-card max-width="344" class="mx-auto">
              <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    cov {{ trajet.depart }}
                    <v-icon>mdi-arrow-right-bold</v-icon>
                    {{ trajet.arrive }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >annoncer par:
                    <span class="userStyle" @click="getProfilAnonce(index)">
                      {{ trajet.username }}</span
                    >
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text>
                <v-chip small class="mr-1">{{ trajet.time }}</v-chip>
                <v-chip small
                  >bagage :{{ trajet.bagage ? "oui" : "non" }}</v-chip
                >
                <v-chip small class="ml-1">prix :{{ trajet.prix }} TND</v-chip>
              </v-card-text>
              <v-card-text>{{ trajet.description }}</v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  width="100%"
                  @click="reservation(index)"
                  >reserver</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="(trajet, index) in trajetPassenger"
            :key="index"
          >
            <v-card max-width="344" class="mx-auto">
              <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    cov {{ trajet.depart }}
                    <v-icon>mdi-arrow-right-bold</v-icon>
                    {{ trajet.arrive }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >annoncé par:<span
                      class="userStyle"
                      @click="getProfilAnonce(index)"
                    >
                      {{ trajet.username }}</span
                    >
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text>{{ trajet.description }}</v-card-text>
              <v-card-text>
                <v-chip>{{ trajet.time }}</v-chip>
                <v-chip>bagage :{{ trajet.bagage ? "oui" : "non" }}</v-chip>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  width="100%"
                  @click="reservation(index)"
                  >reserver</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-dialog
        v-model="dialog"
        persistent
        :overlay="false"
        max-width="486px"
        transition="dialog-transition"
      >
        <v-card>
          <v-card-title class="blue darken-2">
            profile
          </v-card-title>
          <v-container>
            <v-row class="mx-2">
              <v-col class="align-center justify-space-between" cols="12">
                <v-row align="center" class="mr-0">
                  <v-avatar size="40px" class="mx-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    />
                  </v-avatar>
                  <v-chip class="ma-2">
                    {{ username }}
                  </v-chip>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-icon>mdi-phone</v-icon> Phone: {{ phone }}
              </v-col>
              <v-col cols="6">
                <v-icon>mdi-car</v-icon> voiture: {{ carModel }}
              </v-col>
              <v-col cols="6">
                <v-icon>mdi-smoking</v-icon> Tabac: {{ fumer }}
              </v-col>
              <v-col cols="6">
                <v-icon>mdi-theme-light-dark</v-icon> voiture climatisé:
                {{ climat }}
              </v-col>
              <v-col cols="12">
                <div class="text-center">
                  <v-rating v-model="rating"></v-rating>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  inject: ['theme'],
  data() {
    return {
     
      tabs: "chauffeur",
      trajetPassenger: [],
      trajetChauffeur: [],
      dialog: false,
      username: "",
      phone: "",
      carModel: "",
      fumer: "",
      climat: "",
      rating: Number,
      recheBool: false,
    };
  },
  created() {
    axios.get("covoiturage/").then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].type == "chauffeur") {
          this.trajetChauffeur.push(res.data[i]);
        } else {
          this.trajetPassenger.push(res.data[i]);
        }
      }
     
    }).then(()=>{
      this.recheBool = true;
    });
  },
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
      console.log(this.trajetChauffeur[index].idUserPoster);
      if (this.tabs == "chauffeur") {
        axios
          .get("user/" + this.trajetChauffeur[index].idUserPoster)
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
      } else {
        axios
          .get("user/" + this.trajetPassenger[index].idUserPoster)
          .then((res) => {
            (this.username = res.data.username),
              (this.phone = res.data.phone),
              (this.carModel = res.data.carModel),
              (this.fumer = res.data.fumer),
              (this.climat = res.data.climat),
              (this.rating = res.data.rating),
              (this.dialog = true);
          });
      }
    },
  },
};
</script>
<style scoped>
.all {
  padding: 0;
  margin: 0;
  min-height: 100%;
}
.userStyle {
  cursor: pointer;
  color: blue;
}
</style>
