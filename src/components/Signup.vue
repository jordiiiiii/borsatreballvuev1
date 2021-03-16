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
            class="element element-1"
            color="primary"
            v-bind="attrs"
            v-on="on"
            >Sign Up</v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>Sign Up</v-toolbar>
            <v-card-text>
              <template>
                <v-form
                  class="pa-12"
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <!--firstname field-->
                  <v-text-field
                    v-model="userData.firstname"
                    :rules="[rules.required, rules.min, rules.max]"
                    label="Firstname"
                    hint="At least 3 characters"
                    required
                  ></v-text-field>
                  <!--lastname field-->
                  <v-text-field
                    v-model="userData.lastname"
                    :rules="[rules.required, rules.min, rules.max]"
                    label="Lastname"
                    hint="At least 3 characters"
                    required
                  ></v-text-field>
                  <!--phone number field-->
                  <v-text-field
                    v-model="userData.phone"
                    :rules="[rules.required, rules.phone]"
                    label="Phone Number"
                    placeholder="012-345-6789"
                    required
                  ></v-text-field>
                  <!--email field-->
                  <v-text-field
                    v-model="userData.email"
                    :rules="emailRules"
                    label="Email"
                    required
                  ></v-text-field>
                  <!--password field-->
                  <v-text-field
                    v-model="userData.password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passRules.required, passRules.min]"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    hint="At least 6 characters"
                    counter
                    @click:append="showPassword = !showPassword"
                  >
                    <!--                    loading-->
                    <!--                    <template v-slot:progress>-->
                    <!--                      <v-progress-linear-->
                    <!--                        :value="progress"-->
                    <!--                        :color="color"-->
                    <!--                        absolute-->
                    <!--                        height="3"-->
                    <!--                      ></v-progress-linear>-->
                    <!--                    </template>-->
                  </v-text-field>
                  <!--login btn-->
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    elevation="1"
                    outlined
                    class="mr-4 mt-3"
                    :loading="loading"
                    @click="signup"
                  >
                    Register
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
  name: "Signup",
  data: () => ({
    userData: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: ""
    },
    value: "",
    successMessage: "You Win",
    errorMessage: "",
    showPassword: false,
    valid: true,
    loading: false,
    dialog: false,
    rules: {
      required: value => !!value || "Value Required.",
      min: v => (v && v.length >= 3) || "Min 3 characters",
      max: v => (v && v.length <= 10) || "Must be less than 10 characters",
      phone: v =>
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v) ||
        "Phone must be valid"
    },
    emailRules: [
      v => !!v || "Email is required",
      v => /.+@.+\..+/.test(v) || "Email must be valid"
    ],
    passRules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 6) || "Min 6 characters"
    }
  }),
  methods: {
    signup() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const candidat = {
          email: this.email,
          pass: this.password,
          nom: this.password,
          cognoms: this.password,
          telefon: this.password,
          ofertes: [],
          usuari: {}
        };
        // moment asyncron
        console.log(candidat);
        this.loading = false;
        this.dialog = false;
        this.$refs.form.reset();
        this.$router.replace("/usuari").catch(() => {});
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  computed: {
    progress() {
      return Math.min(100, this.password.length * 10);
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    }
  }
};
</script>

<style scoped>
.element {
  background-color: #afd275;
}
.element-1 {
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 2px 0 rgba(255, 255, 255, 0.3);
}
</style>
