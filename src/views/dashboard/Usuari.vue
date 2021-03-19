<template>
  <div class="usuari ma-4">
    <h1 class="subtitle-1 grey--text">Ofertes de Treball</h1>
    <v-expansion-panels focusable class="pa-4">
      <v-expansion-panel v-for="item in ofertes" :key="item.id">
        <v-expansion-panel-header>
          {{ item.titol }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pl-2 pt-4">
          <p>{{ item.descripcio }}</p>
          <p>Publicació: {{ item.data_publicacio }}</p>
          <p>Lloc: {{ item.ubicacio }}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "Usuari",
  data: () => ({
    ofertes: [],
    empreses: []
  }),
  created() {
    this.axios
      .get(
        "http://labs.iam.cat/~a18jorgornei/projecte3/back/api.php/records/oferta/"
      )
      .then(response => {
        // console.log(response.data.records);
        this.ofertes = response.data.records;
      });
    // this.axios
    //   .get(
    //     "http://labs.iam.cat/~a18jorgornei/projecte3/back/api.php/records/empresa/"
    //   )
    //   .then(response => {
    //     console.log(response.data.records);
    //     this.empreses = response.data.records;
    //   });
  }
};
</script>

<style scoped></style>
