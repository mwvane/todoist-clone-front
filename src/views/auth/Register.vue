<template>
  <div>
    <div class="row justify-content-center m-5">
      <div class="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6">
        <div class="login-page card p-5 shadow rounded" style="width: 500px !important;">
          <Form @submit="submit">
            <h3> Register </h3>
            <div class="my-4">
              <label for="firstname" class="form-label">Firstname:</label>
              <CustomInput name="firstname"
                           attribute="firstname"
                           placeholder="Firstname:"
                           :model="model"
                           :rules="{required: true }">
              </CustomInput>
            </div>
            <div class="my-4">
              <label for="lastname" class="form-label">Lastname:</label>
              <CustomInput name="lastname"
                           attribute="lastname"
                           type="text"
                           :model="model"
                           :rules="{required: true }"
                           placeholder="Lastname:">
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

<script>
import CustomInput from "@/Components/CustomInput";
import {Form} from 'vee-validate'
import axios from 'axios';
export default {
  name: "Register",
  components:{
    CustomInput, Form
  },
  data() {
    return {
      isLoading: false,
      model: {
        email: '',
        password: '',
        confirm_password: '',
        firstname: 'abc',
        lastname: '',
      }
    }
  },
  methods:{
    async submit(){
      const tmp = this.model.firstname
      debugger
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 300)

    }
  }
}
</script>

<style scoped>

</style>