<template>
  <div class="all">
    <v-container class="fixeStyle" grid-list-xs>
      <v-row>
        <v-col cols="12" md="7" class="  hidden-sm-and-down">
          <v-card flat tile class="clone">
            <div class="fix">
              <h2>Bienvenue, chez nous ...</h2>
              <h6>
                trouver des acompagnons et ne se deplacer pas seule .. juste
                enregister vous
              </h6>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <v-card class="px-auto">
            <v-subheader class="fixeStyle">connecter vous à votre </v-subheader>
            <v-row
              style="margin: 20px;
    margin-top: 64px;"
            >
              <v-col cols="12" md="12">
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
                <v-btn
                  color="primary"
                  @click="logIn"
                  style=" width:100%;"
                  medium
                  >connexion</v-btn
                >
              </v-col>
              <v-col cols="12" md="12">
                <span class="fixeStyle"
                  >créer un compte...
                  <router-link to="/signUp" style="color:blue !important">
                    cliquer ici</router-link
                  ></span
                >
              </v-col>
            </v-row>

            <span class="admin">vasyTN Admin</span>
          </v-card>
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
      email: "",
      password: "",
      emailCheck: false,
      passwordCheck: false,
      authData: [],
      snackbar: false,
      timeout: 4000,
    };
  },
  methods: {
    setWithExpiry(key, value, ttl) {
      const now = new Date();
      const item = {
        value: value,
        expiry: now.getTime() + ttl,
      };
      localStorage.setItem(key, JSON.stringify(item));
    },

    logIn() {
      if (this.email == "") {
        this.emailCheck = true;
        setTimeout(() => {
          this.emailCheck = false;
        }, 3000);
      }
      if (this.password == "") {
        this.passwordCheck = true;
        setTimeout(() => {
          this.passwordCheck = false;
        }, 3000);
      } else {
        axios
          .post("user/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            this.authData = res.data;
            this.$store.state.token = this.authData.token;

            this.setWithExpiry("token", this.authData.token, 86400000);
            process.env.TOKEN = this.authData.token;

            localStorage.setItem("idUser", this.authData.userId);

            axios.get("user/" + this.authData.userId).then((res) => {
              localStorage.setItem(
                "userProfil",
                JSON.stringify({
                  username: res.data.username,
                  phone: res.data.phone,
                  carModel: res.data.carModel,
                  email: res.data.email,
                  fumer: res.data.fumer,
                  rating: res.data.rating,
                  climat: res.data.climat,
                })
              );
            });
            setTimeout(() => {
              this.$router.push({
                name: "home",
              });
              this.$router.go(0);
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
            this.snackbar = true;
          });
      }
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

.admin {
  margin-top: 32px !important;
  margin-left: 40%;
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

.fixeStyle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 12%;
}
.clone {
  position: relative;
  left: 25px;
  background: #1976d2;
  width: 100%;
  height: 100%;
  z-index: 222;
}
.fix {
  margin: 0px;
  padding: 50px;
  position: relative;
  top: 20%;
  color: #fff;
  letter-spacing: 2px;
}
.fix h6 {
  margin-top: 20px !important;
}

</style>
