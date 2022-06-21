<template>
  <div class="row justify-content-center m-5">
    <div class="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6">
      <div class="login-page card p-5 shadow rounded" style="width: 500px !important;">
        <Form @submit="submit">
          <h3> Todoist clone </h3>
          <div class="my-4">
            <label for="email" class="form-label">Email:</label>
            <CustomInput name="email"
                         attribute="email"
                         type="email"
                         :model="model"
                         :rules="{required: true }"
                         placeholder="Enter email">
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
          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input class="form-check-input"
                     v-model="remember"
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

<script>
import CustomInput from "@/Components/CustomInput";
import {Field, Form, ErrorMessage} from 'vee-validate';

export default {
  name: "Login",
  components: {Form, CustomInput},
  data() {
    return {
      isLoading: false,
      model: {
        email: '',
        password: '',
        remember: false
      }
    }

  },
  methods: {
    submit() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 300)
    },
  }
}
</script>

<style scoped>
</style>