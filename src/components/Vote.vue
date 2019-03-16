<template>
  <div>
    <h1>Vote</h1>
    <form>
      <BaseInput
        label="Test"
        placeholder="Podaj coś"
        v-model="textValue"
        @input="logInput"
        name="test"
        type="text"
        validate="required|min:3"
      /><br/>
      <BaseInput
        label="Liczba"
        placeholder="Podaj coś"
        v-model="numberValue"
        @input="logInput"
        name="number"
        type="number"
        validate="required|integer|min_value:5"
      />
    </form>
    <br/>
    {{ textValue }}<br/>
    {{ numberValue }}
  </div>
</template>

<script>
  export default {
    name: "Vote",
    data() {
      return {
        textValue: '',
        numberValue:''
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
