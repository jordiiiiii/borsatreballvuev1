<template>
  <div class="home">
    <Welcome />
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-3">
            Ets una Empresa?
          </h2>
          <!--Link Pagina Empresa-->
          <v-btn to="/empresa">empresa</v-btn>
        </v-col>

        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-3">
            Busques Feina?
          </h2>
          <v-row class="mt-2">
            <v-col cols="6">
              <!--Login-->
              <Signin />
            </v-col>
            <v-col cols="6">
              <!--Signup-->
              <Signup />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import Signin from "@/components/Signin";
import Signup from "@/components/Signup";

export default {
  name: "Home",
  components: {
    Welcome,
    Signin,
    Signup
  }
};
</script>

<style scoped></style>
