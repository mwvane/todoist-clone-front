<template>
  <div class="row justify-content-center m-5">
    <div class="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6">
      <div class="login-page card p-5 shadow rounded" style="width: 500px !important;">
        <Form @submit="submit">
          <h3> Todoist clone </h3>
          <div class="my-4">
            <label for="email" class="form-label">Email:</label>
            <Field v-model="email"
                   type="email"
                   name="email"
                   :rules="required"
                   validateOnInput
                   v-slot="{ field, errors }">
              <input v-bind="field"
                     class="form-control"
                     :class="{'is-invalid': errors && errors.length > 0}"
                     placeholder="Enter email">
            </Field>
            <ErrorMessage name="email" class="text-danger"/>

          </div>
          <div class="my-4">
            <label for="pwd" class="form-label">Password:</label>
            <Field v-model="password"
                   type="password"
                   name="password"
                   :rules="required"
                   validateOnInput
                   v-slot="{ field, errors }">
              <input v-bind="field"
                     class="form-control"
                     :class="{'is-invalid': errors && errors.length > 0}"
                     placeholder="Enter password">
            </Field>
            <ErrorMessage name="password" class="text-danger"/>


          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input class="form-check-input"
                     v-model="remember"
                     type="checkbox"> Remember me
            </label>
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
import { Field, Form, ErrorMessage } from 'vee-validate';
export default {
  name: "Login",
  components: {Form, Field, ErrorMessage},
  data() {
    return {
      isLoading: false,
      email: '',
      password: '',
      remember: false
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 300)
    },
    required(value) {
      if (value.length > 0) {
        return true;
      }
      return 'This field is required'
    }
  }
}
</script>

<style scoped>
</style>