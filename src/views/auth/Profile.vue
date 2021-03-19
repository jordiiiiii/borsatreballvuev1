<template>
  <div class="profile ma-4">
    <h1 class="subtitle-1 grey--text">Llista d'usuaris</h1>
    <v-expansion-panels focusable class="pa-4">
      <v-expansion-panel v-for="item in usuaris" :key="item.id">
        <v-expansion-panel-header>
          {{ item.nom }} {{ item.cognom1 }} {{ item.cognom2 }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pl-2 pt-4">
          {{ item.telefon }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    usuaris: []
  }),
  created() {
    this.axios
      .get(
        "http://labs.iam.cat/~a18jorgornei/projecte3/back/api.php/records/candidat/"
      )
      .then(response => {
        // console.log(response.data.records);
        this.usuaris = response.data.records;
      });
  }
};
</script>

<style scoped></style>
