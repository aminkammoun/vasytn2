import Trajet from "./components/views/rechTrajet.vue";
import home from "./components/views/Home.vue";
import ajoutTrajet from "./components/views/ajouterTrajet.vue";
import profil from "./components/views/profil.vue";
import history from "./components/views/history.vue";
import rechercheSpec from "./components/views/rechercheSpec.vue";

import signUp from "./components/user/signIn.vue";
import logIn from "./components/user/logIn.vue";

export const routes = [
  {
    path: "/",
    component: home,
    name: "home",
  },

  {
    path: "/rechercheTrajet",
    component: Trajet,
  },
  {
    path: "/ajoutTrajet",
    component: ajoutTrajet,
  },
  {
    path: "/signUp",
    component: signUp,
  },
  {
    path: "/logIn",
    component: logIn,
  },
  {
    path: "/profil",
    component: profil,
  },
  {
    path: "/history",
    component: history,
  },
  {
    path: "/reche",
    component: rechercheSpec,
  },
];
