<template>
  <div>
    <Field :type="type"
           :name="name"
           :rules="getRule"
           v-model="model[attribute]"
           validateOnInput
           v-slot="{ field, errors }">
      <input v-bind="field"
             class="form-control"
             :class="{'is-invalid': errors && errors.length > 0}"
             :placeholder="placeholder">
    </Field>
    <ErrorMessage :name="name" class="text-danger"/>
  </div>
</template>

<script>
import {Field, ErrorMessage} from "vee-validate";

export default {
  name: "CustomInput",
  components: {
    Field, ErrorMessage
  },
  props: {
    type: {
      default: "text",
    },
    rules: Object,
    name: String,
    placeholder: {
      default: "Please enter value"
    },
    model: {
      required: true,
      default: {},
    },
    attribute: {
      type: Object,
      required: true,
    }
  },
  computed:{
    getRule(){
      if(this.rules.required){
        return this.required
      }
      return  () => {}
    }
  },
  methods:{
    required(value) {
      if (value) {
        return true;
      }
      return 'This field is required'
    },
  },
}
</script>

<style scoped>

</style>