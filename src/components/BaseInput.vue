<template>
  <label>
    {{ label }}
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      v-validate="validate"
      @input="customInput"
    />
    <span v-show="errors.has(name)" class="error">
      {{ errors.first(name) }}
    </span>
  </label>
</template>

<script>
  export default {
    name: "BaseInput",
    inheritAttrs: false,
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      },
      label: {
        required: true,
        type: String,
      },
      placeholder: {
        type: String,
        default: 'Type anything'
      },
      name: {
        type: String,
        required: true,
      },
      validate: {
        type: String,
        default: ''
      }
    },
    computed: {
      //5/ 7. To make sure that every listener works (e.g. @click, @focus),
      // we will bind all listeners except input listener
      listeners() {
        const {input, ...listeners} = this.$listeners;
        return listeners;
      },
    },
    methods: {
      //3/ 8. Input is explicitly defined to properly update value binded as v-model
      customInput(event) {
        this.$emit('input', event.target.value);
      },
    },
  }
</script>

<style scoped>

</style>
