<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="648"
        v-model="dialog"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="neumorphism"
            color="primary"
            v-bind="attrs"
            v-on="on"
            >Sign In</v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>Sign In</v-toolbar>
            <v-card-text>
              <template>
                <v-form
                  class="pa-12"
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <!--email field-->
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                  ></v-text-field>
                  <!--password field-->
                  <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passRules.required, passRules.min]"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    hint="At least 6 characters"
                    counter
                    @click:append="showPassword = !showPassword"
                  >
                  </v-text-field>
                  <!--login btn-->
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    elevation="1"
                    outlined
                    class="mr-4 mt-3"
                    :loading="loading"
                    @click="login"
                  >
                    Login
                  </v-btn>
                  <!--reset btn-->
                  <v-btn
                    color="error"
                    elevation="1"
                    outlined
                    class="mr-4 mt-3"
                    @click="reset"
                  >
                    Reset Form
                  </v-btn>
                  <!--reset btn validation-->
                  <v-btn
                    color="warning"
                    elevation="1"
                    outlined
                    class="mr-4 mt-3"
                    @click="resetValidation"
                  >
                    Reset Validacio
                  </v-btn>
                  <p class="mt-4 red--text">{{ errorMessage }}</p>
                </v-form>
              </template>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Signin",
  data: () => ({
    value: "",
    successMessage: "You Win",
    errorMessage: "",
    showPassword: false,
    valid: true,
    loading: false,
    dialog: false,
    email: "",
    emailRules: [
      v => !!v || "Email is required",
      v => /.+@.+\..+/.test(v) || "Email must be valid"
    ],
    password: "",
    passRules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 6) || "Min 6 characters"
    }
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const usuari = {
          email: this.email,
          pass: this.password
        };
        // moment asyncron
        if (this.email === "admin@admin.com" && this.password === "123456") {
          console.log(usuari);
          this.loading = false;
          this.dialog = false;
          this.$refs.form.reset();
          this.$router.replace("/usuari").catch(() => {});
        } else {
          this.loading = false;
          this.$refs.form.reset();
          this.errorMessage = "You Lose!";
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped>
.neumorphism {
  background-color: #f0f0f3;
  box-shadow: -10px -10px 10px 0 rgba(255, 255, 255, 0.7),
    10px 10px 10px 0 rgba(174, 174, 192, 0.2);
}
</style>
