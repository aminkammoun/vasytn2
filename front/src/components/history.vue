<template>
  <div class="all">
    <v-container>
      <h1>reservations</h1>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" md="4" v-for="(res, index) in reser" :key="index">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card max-width="344" class="mx-auto">
                <v-list-item>
                  <v-list-item-avatar color="grey"></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">
                      cov {{ res.depart }}
                      <v-icon>mdi-arrow-right-bold</v-icon>
                      {{ res.arrive }}
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >annoncer par:
                      <span @click="getProfilAnonce(index)">
                        {{ res.username }}</span
                      >
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text>
                  <v-chip small class="mr-1">{{ res.time }}</v-chip>
                  <v-chip small
                    >bagage :{{ res.bagage ? "oui" : "non" }}</v-chip
                  >
                  <v-chip small class="ml-1">prix :{{ res.prix }} TND</v-chip>
                </v-card-text>
                <v-card-text>{{ res.description }}</v-card-text>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-row>
                      <v-col cols="12" md="8">
                        <v-icon
                          color="error"
                          x-large
                          @click="delecteReserHistory(index)"
                          >mdi-delete</v-icon
                        >
                      </v-col>
                    </v-row>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template></v-hover
          >
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <h1>mes trajets</h1>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" md="4" v-for="(res, index) in trajets" :key="index">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card max-width="344" class="mx-auto">
                <v-list-item>
                  <v-list-item-avatar color="grey"></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">
                      cov {{ res.depart }}
                      <v-icon>mdi-arrow-right-bold</v-icon>
                      {{ res.arrive }}
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >annoncer par:
                      <span> {{ res.username }}</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text>
                  <v-chip small class="mr-1">{{ res.time }}</v-chip>
                  <v-chip small
                    >bagage :{{ res.bagage ? "oui" : "non" }}</v-chip
                  >
                  <v-chip small class="ml-1">prix :{{ res.prix }} TND</v-chip>
                </v-card-text>
                <v-card-text>{{ res.description }}</v-card-text>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-row>
                      <v-col cols="12" md="8">
                        <v-icon
                          color="error"
                          x-large
                          @click="deleteTrajetHistory(index)"
                          >mdi-delete</v-icon
                        >
                      </v-col>
                    </v-row>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template></v-hover
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      reser: [],
      trajets: [],
    };
  },
  created() {
    axios
      .get("reservation/history/" + this.$store.state.userProfil._id)
      .then((res) => {
        console.log("ok", res.data);
        for (var i = 0; i < res.data.length; i++) {
          axios.get("covoiturage/" + res.data[i].idPoster).then((response) => {
            if (response.data !== "") {
              this.reser.push(response.data);
            }
          });
        }
        axios
          .get("covoiturage/owner/" + localStorage.getItem("idUser"))
          .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
              this.trajets.push(response.data[i]);
            }

            console.log("trajet", this.trajets);
          });
      });
    /*  */
  },
  methods: {
    delecteReserHistory(index) {
      axios
        .delete("covoiturage/" + this.reser[index]._id)
        .then(() => {
          this.$toute.go(0);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteTrajetHistory(index) {
      axios.delete("covoiturage/" + this.trajets[index]._id).then(() => {
        this.$router.go(0); 
      });
    },
  },
};
</script>
<style scoped>
.all {
  padding: 0;
  margin: 0;
  min-height: 100%;
  background: #f2f5f8;
}
</style>
