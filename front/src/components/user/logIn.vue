<template>
  <div class="all">
    <v-row>
      <v-col cols="12" md="4" class="hidden-sm-and-down">
        <div class="divDesc">
          <h1>vasyTN</h1>
          <p><span></span></p>
        </div>
        <img
          class="imgSvg"
          src="../../assets/image/user-account-login-1805702-1539388.webp"
          alt=""
        />
      </v-col>
      <v-col cols="12" md="3"></v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto">
          <h1>Welcome</h1>

          <v-subheader
            style="text-align: center !important;
    margin-left: 33%;"
            >Sign in to your account</v-subheader
          >
          <v-row
            style="margin: 20px;
    margin-top: 74px;"
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
                v-model="password"
                label="password"
                name="password"
                id="password"
                type="password"
                outlined
              ></v-text-field>
              <v-btn color="#f2bb13" @click="logIn" style=" width:100%;" x-large
                >submit</v-btn
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" style="margin-left:35%;">
              <span
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
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Rules: [(v) => !!v || "champ obligatoire"],
      username: "",
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
      if (this.username == "") {
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
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            this.authData = res.data;
            this.$store.state.token = this.authData.token;

            this.setWithExpiry("token", this.authData.token, 86400000);
            localStorage.setItem("idUser", this.authData.userId);

            axios.get("user/" + this.authData.userId).then((res) => {
              localStorage.setItem("userProfil", JSON.stringify(res.data));
              console.log("okkk");
            });
          })
          .catch((err) => {
            console.log(err);
            this.snackbar = true;
          });
      }

      setTimeout(() => {
        this.$router.push({
        name: "home",
      });         this.$router.go(0);
      }, 2000);
      
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

.all {
  width: 100%;
  height: 76vh;
}
.v-card {
  width: 100%;
  position: relative;
  top: 10%;
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
@keyframes profile {
  0% {
    content: "platforme tunisienne de covoiturage";
  }
  50% {
    content: "facilite votre transport";
  }
  100% {
    content: "gagne votre temps ";
  }
}
</style>
