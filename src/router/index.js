import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/auth/Profile";
import Usuari from "@/views/dashboard/Usuari";
import Empresa from "@/views/dashboard/Empresa";
// import Signup from "@/views/auth/Signup";
// import Signin from "@/views/auth/Signin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/usuari",
    name: "Usuari",
    component: Usuari
  },
  {
    path: "/empresa",
    name: "Empresa",
    component: Empresa
  }
  // {
  //   path: "/signup",
  //   name: "Signup",
  //   component: Signup
  // },
  // {
  //   path: "/signin",
  //   name: "Signin",
  //   component: Signin
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
