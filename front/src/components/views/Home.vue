<template>
  <div>
    <v-main>
      <div class="home_large">
        <div class="title_style">
          <h1>Et vous, qui allez-vous retrouver ?</h1>
        </div>
        <div class="anounce_form">
          <h2>choisissez le trajet qui vous convient le mieux</h2>
          <v-row class="form_style">
            <v-col cols="12" md="3">
              <v-text-field
                prepend-icon="mdi-map-marker"
                v-model="depart"
                name="depart"
                label="depart"
                id="depart"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field
                prepend-icon="mdi-map-marker-outline"
                v-model="arrive"
                name="arrivé"
                label="arrivé"
                id="arrivé"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="date : ex"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="3">
              <v-btn class="btn_search">
                <router-link to="reche">recherche</router-link>
                
              </v-btn>
            </v-col>
          </v-row>
          <div class="text-center">
            <v-sheet class="sheet_style" color="orange lighten-2"
              >>> annoncer une trajet. clicker ici</v-sheet
            >
          </div>
        </div>
      </div>
      <v-container grid-list-xs>
        <h1>Allez où vous voulez. D'où vous voulez.</h1>
        <v-row>
          <transition name="fade-In">
            <v-col cols="12" md="4" id="liste">
              <b>pratique</b>
              <p>
                Trouvez rapidement un covoiturage ou un bus à proximité parmi
                les millions de trajets proposés.
              </p>
            </v-col>
          </transition>

          <v-col cols="12" md="4" id="liste">
            <b>facile</b>
            <p>
              Trouvez le trajet parfait ! Il vous suffit d’entrer votre adresse
              exacte, de choisir le voyage qui vous convient le mieux, et de
              réserver.
            </p>
          </v-col>
          <v-col cols="12" md="4" id="liste">
            <b>Direct</b>
            <p>
              Que vous prévoyiez à l’avance ou réserviez en dernière minute,
              vous trouverez toujours un tarif avantageux.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      depart: "",
      arrive: "",
      menu: false,
      modal: false,
      menu2: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
}
.home_large {
  background-image: url("../../assets/image/co.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.title_style {
  color: #fff;
  position: absolute;
  top: 10%;
  left: 35%;
}
.anounce_form {
  background: #fff;
  position: absolute;
  width: 61%;
  height: 15%;
  top: 17%;
  left: 22%;
  border-radius: 15px;
}
.form_style {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex: 1 1 auto;

  margin-right: -43px;
  margin-left: 0px;
}
.btn_search {
  background: #f2bb13 !important;
  position: relative;
  color: #454c55;
  font-weight: 600;
  left: 20px;
  top: 12px;
}
.sheet_style {
  border-radius: 0px 0px 10px 10px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
a {
  font-weight: 600;
  color: #454c55 !important;
  text-decoration: none !important;

}
</style>
