<template>
  <div>
    <v-main>
      <div class="all">
        <div class="cover">
          <h1>Et vous, qui allez-vous retrouver ?</h1>
          <form class="flex-form">
            <label for="from">
              <i class="ion-location"></i>
            </label>
            <input
              type="search"
              placeholder="votre destination ?"
              v-model="arrive"
            />
            <input type="submit" value="Search" @click="search" />
          </form>
        </div>
      </div>
      <app-details></app-details>
    </v-main>
  </div>
</template>
<script>
import Details from "../seconds/details";

export default {
  components: {
    appDetails: Details,
  },
  data() {
    return {
      arrive: "",
    };
  },
  methods: {
    search() {
      this.$store.state.distination = this.arrive;
      console.log(this.$store.state.distination);
      this.$router.push("/reche");
    },
  },
};
</script>
<style scoped>
.all {
  font-family: "Lato", sans-serif;
  margin: 0;
  background: url("../../assets/image/home.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  color: #fff;
  overflow: hidden;
}

a.btn:hover {
  background: #d73851;
  border: 1px solid #d73851;
  color: #fff;
}

.cover {
  height: 100vh;
  width: 100%;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.05)),
    to(rgba(0, 0, 0, 0))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 20px 50px;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.flex-form input[type="submit"] {
  background: #df3d4d;
  border: 1px solid #df3d4d;
  color: #000;
  padding: 0 30px;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
}

.flex-form input[type="submit"]:hover {
  background: #df3d4d;
  border: 1px solid #df3d4d;
}

.flex-form {
  display: -webkit-box;
  display: flex;
  position: relative;
  width: 500px;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.3);
}

.flex-form > * {
  border: 0;
  padding: 0 0 0 10px;
  background: #fff;
  line-height: 50px;
  font-size: 1rem;
  border-radius: 0;
  outline: 0;
  -webkit-appearance: none;
}

input[type="search"] {
  flex-basis: 500px;
}

#madeby {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 25px 100px;
  color: #fff;
}

@media all and (max-width: 800px) {
  body {
    font-size: 0.9rem;
  }

  .flex-form {
    width: 100%;
  }

  input[type="search"] {
    flex-basis: 100%;
  }

  .flex-form > * {
    font-size: 0.9rem;
  }

  header {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    padding: 10px !important;
  }

  header h2 {
    margin-bottom: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  .cover {
    padding: 20px;
  }

  #madeby {
    padding: 30px 20px;
  }
}

@media all and (max-width: 360px) {
  header nav li {
    margin: 0 10px;
  }

  .flex-form {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  input[type="search"] {
    flex-basis: 0;
  }

  label {
    display: none;
  }
}
</style>
