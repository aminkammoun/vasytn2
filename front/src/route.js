import Trajet from "./components/rechTrajet.vue";
import home from "./components/Home.vue";
import ajoutTrajet from "./components/ajouterTrajet.vue";
import profil from "./components/profil.vue";
import history from "./components/history.vue";

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
];
