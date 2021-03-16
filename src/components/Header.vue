<template>
  <nav>
    <!--sideBar-->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item v-for="item in items" :key="item.text" :to="item.route">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--navbar-->
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <!--logo i home-->
        <router-link
          to="/"
          custom
          v-slot="{ navigate }"
          style="cursor: pointer"
        >
          <img
            @click="navigate"
            @keypress.enter="navigate"
            role="link"
            alt="Vuetify Logo"
            class="shrink mr-2"
            src="../assets/logodark.svg"
            width="32"
          />
        </router-link>
        <!--logoName-->
        <img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          src="../assets/logotitledark.svg"
          width="150"
        />
      </div>
      <!--espai central-->
      <v-spacer></v-spacer>
      <!--dropdown menu-->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="hidden-xs-only mx-1" text dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item v-for="item in items" :key="item.text" :to="item.route">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <!--sign Out-->
      <v-btn text class="mx-1">
        <span @click.prevent.stop="logout">Sign Out</span>
        <v-icon normal right>mdi-export</v-icon>
      </v-btn>
      <!--drawer btn-->
      <v-app-bar-nav-icon
        class="hidden-sm-and-up mr-2"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
    items: [
      { text: "Profile", icon: "mdi-account", route: "/profile" },
      { text: "Usuari", icon: "mdi-view-dashboard", route: "/usuari" },
      { text: "Empresa", icon: "mdi-bank-outline", route: "/empresa" }
      // { text: "Sign Up", icon: "mdi-face-woman", route: "/signup" },
      // { text: "Sign In", icon: "mdi-lock-open", route: "/signin" }
    ]
  }),
  methods: {
    logout() {
      alert("Has fet un Log Out");
      this.$router.replace("/").catch(() => {});
    }
  },
  computed: {}
};
</script>

<style scoped></style>
