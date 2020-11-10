<template>
  <div class="all">
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="12" md="7" class="  hidden-sm-and-down">
          <v-card flat tile class="clone">
            <div class="fix">
              <h2>Bienvenue, chez nous ...</h2>
              <h6>
                trouver des acompagnons et ne se deplacer pas seule .. juste enregister vous 
              </h6>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <div>
            <v-card>
              <div>
                <v-subheader class="fixeStyle "
                  >créer votre compte</v-subheader
                >
              </div>

              <v-row
                style="margin: 20px;
   "
              >
                <v-col cols="12" md="12">
                  <v-text-field
                    :rules="Rules"
                    required
                    class="inputField"
                    v-model="username"
                    label="username"
                    name="username"
                    id="username"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    :rules="Rules"
                    required
                    class="inputField"
                    v-model="phone"
                    label="phone"
                    name="phone"
                    id="phone"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    :rules="Rules"
                    required
                    class="inputField"
                    v-model="email"
                    label="email"
                    name="email"
                    id="email"
                    outlined
                  ></v-text-field>

                  <v-text-field
                    :rules="Rules"
                    required
                    class="inputField"
                    v-model="password"
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    outlined
                  ></v-text-field>
                  <v-btn color="primary" @click="submitted" style=" width:100%;"
                    >submit</v-btn
                  >
                </v-col>
                <v-col cols="12" md="12">
                  <span class="fixeStyle "
                    >vous avez déja un compte...
                    <router-link to="/logIn" style="color:blue !important"
                      >cliquer ici</router-link
                    ></span
                  >
                </v-col>
              </v-row>

              <span class="admin">vasyTN Admin</span>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-snackbar color="error" v-model="snackbar" :timeout="timeout">
        ce compte est introuvable

        <template v-slot:action="{ attrs }">
          <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Rules: [(v) => !!v || "champ obligatoire"],
      username: "",
      email: "",
      phone: "",
      password: "",
      snackbar: false,
      timeout: 3000,
    };
  },
  methods: {
    submitted() {
      axios
        .post("user/signIn", {
          username: this.username,

          email: this.email,
          phone: this.phone,
          password: this.password,
        })
        .then(() => {
          this.clear;
          this.$router.push("/logIn");
        });
    },

    clear() {
      (this.username = ""),
        (this.phone = ""),
        (this.email = ""),
        (this.password = "");
    },
  },
};
</script>
<style scoped>
.inputField {
  margin: auto;
}
h1 {
  text-align: center;
}
.all{
 position: relative;
 top: 10%;
}

.admin {
  margin-top: 32px !important;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.625rem !important;
  letter-spacing: 0.1666666667em !important;
  line-height: 1rem;
  text-transform: uppercase;
  background-color: WHITE;
}
.divDesc {
  position: relative;
  left: 43%;
  top: 15%;
  margin: -25px 0 0 -25px;
}
.divDesc p {
  text-align: center;
}
.imgSvg {
  position: relative;
  left: 50%;
}
p span::before {
  content: "";
  animation: profile 5s infinite;
}
.faza {
  width: 100%;
  height: 100%;
}
.fixeStyle {
  display: flex;
  align-items: center;
  justify-content: center;
}
.clone {
  position: relative;
  left: 25px;
  background: #1976d2;
  width: 100%;
  height: 100%;

}
.fix {
  margin: 0px;
  padding: 50px;
  position: relative;
  top: 20%;
  color: #fff;
  letter-spacing: 2px;
}
.fix h6{
  margin-top: 20px !important;
}
</style>
