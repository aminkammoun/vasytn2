<template>
  <div class="all">
    <v-container>
      <v-row>
        <v-col cols="12" md="3"> </v-col>
        <v-col cols="12" md="6">
          <div class="faza">
            <v-card>
              <v-card-title center>
                <div
                  style="text-align: center;
    position: relative;
    left: 40%;"
                >
                  <v-avatar
                    color="indigo"
                    style="
                height: 109px;
    min-width: 48px;
    width: 109px;
    "
                  >
                    <v-icon dark>mdi-account-circle</v-icon>
                  </v-avatar>
                  <h3>{{ this.username }}</h3>
                </div>
              </v-card-title>

              <v-icon>mdi-acount</v-icon>
              <v-list subheader>
                <v-subheader>information personel</v-subheader>

                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon color="#df3d4d">mdi-email</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>
                      Email:
                      {{ this.email }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon color="#df3d4d">mdi-phone</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-if="editphone">
                      numéro de téléphone:
                      {{ this.phone }}</v-list-item-title
                    >
                    <v-text-field
                      v-else
                      rounded
                      dense
                      v-model="phone"
                      name="phone"
                      label="téléphone"
                    ></v-text-field>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-btn
                      x-small
                      icon
                      color="green"
                      @click="editphone = !editphone"
                    >
                      <v-icon v-if="editphone">mdi-pencil</v-icon>
                      <v-icon v-else @click="update">mdi-plus</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon color="#df3d4d">mdi-smoking</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-if="editfumer">
                      fumeur:
                      {{ this.fumer }}</v-list-item-title
                    >
                    <v-text-field
                      v-else
                      rounded
                      dense
                      v-model="fumer"
                      name="fumeur"
                      label="oui ou non"
                    ></v-text-field>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-btn
                      x-small
                      icon
                      color="green"
                      @click="editfumer = !editfumer"
                    >
                      <v-icon v-if="editfumer">mdi-pencil</v-icon>
                      <v-icon v-if="!editfumer">mdi-plus</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list subheader>
                <v-subheader>information sur la voiture</v-subheader>

                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon color="#df3d4d">mdi-car</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-if="editcar">
                      modéle du voiture:
                      {{ this.carmodel }}</v-list-item-title
                    >
                    <v-text-field
                      v-else
                      rounded
                      dense
                      v-model="carmodel"
                      name="model"
                      label="modéle du voiture:"
                    ></v-text-field>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-btn
                      x-small
                      icon
                      color="green"
                      @click="editcar = !editcar"
                    >
                      <v-icon v-if="editcar">mdi-pencil</v-icon>
                      <v-icon v-if="!editcar">mdi-plus</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon color="#df3d4d">mdi-theme-light-dark</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-if="editclimat">
                      climatisation:
                      {{ this.climat }}</v-list-item-title
                    >
                    <v-text-field
                      v-else
                      rounded
                      dense
                      v-model="climat"
                      name="climat"
                      label="climatisation"
                    ></v-text-field>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-btn
                      x-small
                      icon
                      color="green"
                      @click="editclimat = !editclimat"
                    >
                      <v-icon v-if="editclimat">mdi-pencil</v-icon>
                      <v-icon v-else>mdi-plus</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list subheader>
                <v-subheader>reviews</v-subheader>
                <v-rating
                  class="rate"
                  v-model="rating"
                  background-color="#df3d4d"
                  color="#df3d4d"
                  medium
                ></v-rating>
              </v-list>
            </v-card>

            <v-btn dark @click="update" large class="updateBtn"
              >sauvegarder</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="3"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      editphone: "false",
      editcar: "false",
      editfumer: "false",
      editclimat: "false",
      username: "",
      email: "",
      phone: "",
      carmodel: "",
      climat: "",
      fumer: "",
      rating: 4,
      id: "",
    };
  },

  computed: {
    userProfil() {
      return this.$store.state.userProfil;
    },
  },

  created() {
    this.loadPorfil();
    setTimeout(() => {
      this.id = this.$store.state.userProfil._id;
      this.username = this.$store.state.userProfil.username;
      this.email = this.$store.state.userProfil.email;
      this.phone = this.$store.state.userProfil.phone;
      this.fumer = this.$store.state.rofiuserPl.fumer;
      this.rating = this.$store.state.userProfil.rating;
      this.carmodel = this.$store.state.userProfil.carModel;
      this.climat = this.$store.state.userProfil.climat;
    }, 500);
  },
  methods: {
    update() {
      Axios.put("user/" + this.id, {
        phone: this.phone,
        carModel: this.carmodel,
        fumer: this.fumer,
        climat: this.climat,
        rating: this.rating,
      }).then(() => {
        this.$router.go(0);
      });
    },
    loadPorfil() {
      Axios.get("user/" + localStorage.getItem("idUser")).then((res) => {
        this.$store.state.userProfil = res.data;
        localStorage.setItem(
          "userProfil",
          JSON.stringify(this.$store.state.userProfil)
        );
      });
    },
  },
};
</script>
<style scoped>
.contaner {
  z-index: 10000;
}

.faza {
  width: 100%;
  height: 100%;
}
.rate {
  text-align: center !important;
}
.updateBtn {
  margin-top: 6px;
  position: relative;
  left: 32%;
  background: #df3d4d !important;
  font-family: Quicksand, sans-serif !important;
  font-weight: 600;

}
</style>
