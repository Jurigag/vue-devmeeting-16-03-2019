<template>
  <div>
  <h1>Vote</h1>
    <BaseInput
      @input="logInput"
      label="Test"
      placeholder="Podaj coś"
      v-model="textValue"
    />
    <br/>
    {{ textValue }}
  </div>
</template>

<script>
  export default {
    name: "Vote",
    data() {
      return {
        textValue: ''
      }
    },
    methods: {
      logInput(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>

</style>
