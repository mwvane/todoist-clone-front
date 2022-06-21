<template>
  <div class="row justify-content-center m-5">
    <div class="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6">
      <div class="login-page card p-5 shadow rounded" style="width: 500px !important;">
        <Form @submit="submit" v-slot="{ errors } ">
          <h3> Todoist clone </h3>
          <div class="my-4">
            <label for="username" class="form-label">Username:</label>
            <CustomInput name="username"
                         attribute="username"
                         type="text"
                         :model="model"
                         :rules="{required: true }"
                         placeholder="Enter username">
            </CustomInput>
          </div>
          <div class="my-4">
            <label for="pwd" class="form-label">Password:</label>
            <CustomInput name="password"
                         attribute="password"
                         type="password"
                         :model="model"
                         :rules="{required: true}"
                         placeholder="Enter password">
            </CustomInput>

            <p class="alert alert-danger p-2 mt-3" v-if="errorMessage"> {{ errorMessage }}</p>

          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input class="form-check-input"
                     v-model="model.remember"
                     type="checkbox"> Remember me
            </label>
            <router-link class="mx-3" to="/register">Register</router-link>
          </div>
          <button type="submit"
                  :disabled="isLoading"
                  class="btn btn-primary">
            <span class="spinner spinner-border"
                  v-if="isLoading"
                  style="width: 20px !important; height: 20px !important;"></span>
            Submit
          </button>
        </Form>
      </div>
    </div>

  </div>
</template>

<!--suppress ES6MissingAwait -->
<script>
import CustomInput from "@/components/CustomInput";
import {Field, Form, ErrorMessage} from 'vee-validate';
import AuthService from "@/views/auth/AuthService";
import helpers from "@/helpers";

export default {
  name: "Login",
  components: {Form, CustomInput},
  data() {
    return {
      isLoading: false,
      model: {
        username: '',
        password: '',
        remember: false
      },
      errorMessage: '',
    }
  },
  methods: {
    async submit() {
      this.isLoading = true;
      try {
        const res = await AuthService.login(this.model)
        const token = res.data
        AuthService.saveToken(token)
        this.$router.push({name: 'home'})
      } catch (e) {
        const errors = helpers.getErrors(e.response.data)
        this.errorMessage = helpers.getFirstError(errors)
        setTimeout(() => {
          this.errorMessage = ''
        }, 2000)
      }
      this.isLoading = false;
    },
  }
}
</script>

<style scoped>
</style>