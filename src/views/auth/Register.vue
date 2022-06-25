<template>
  <div>
    <div class="row justify-content-center m-5">
      <div class="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6">
        <div class="login-page card p-5 shadow rounded" style="width: 500px !important;">
          <Form @submit="submit">
            <h3> Register </h3>
            <div class="my-4">
              <label for="firstname" class="form-label">Firstname:</label>
              <CustomInput name="first_name"
                           attribute="first_name"
                           placeholder="Firstname:"
                           :model="model"
                           :rules="{required: true }">
              </CustomInput>
            </div>
            <div class="my-4">
              <label for="lastname" class="form-label">Lastname:</label>
              <CustomInput name="last_name"
                           attribute="last_name"
                           type="text"
                           :model="model"
                           :rules="{required: true }"
                           placeholder="Lastname:">
              </CustomInput>
            </div>
            <div class="my-4">
              <label for="email" class="form-label">Username:</label>
              <CustomInput name="username"
                           attribute="username"
                           type="username"
                           :model="model"
                           :rules="{required: true }"
                           placeholder="Enter username">
              </CustomInput>
            </div>
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
            <div class="my-4">
              <label for="pwd" class="form-label">Confirm password:</label>
              <CustomInput name="confirm_password"
                           attribute="confirm_password"
                           type="password"
                           :model="model"
                           :rules="{required: true}"
                           placeholder="Confirm password">
              </CustomInput>
            </div>

            <p class="alert alert-danger mt-2 p-2" v-if="errorMessage"> {{ errorMessage }}</p>

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
  </div>
</template>

<!--suppress ES6MissingAwait -->
<script>
import CustomInput from "@/components/CustomInput";
import {Form} from 'vee-validate'
import AuthService from "@/services/AuthService";
import helpers from "@/helpers";

export default {
  name: "Register",
  components: {
    CustomInput, Form
  },
  data() {
    return {
      isLoading: false,
      model: {
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        confirm_password: '',
      },
      errorMessage: '',
    }
  },
  methods: {
    async submit() {
      this.isLoading = true;
      const res = await AuthService.register(this.model)
      if (res.ok) {
        this.$router.push({name: 'login'})
      } else {
        const errors = helpers.getErrors(res.data)
        this.errorMessage = helpers.getFirstError(errors)
      }
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>

</style>