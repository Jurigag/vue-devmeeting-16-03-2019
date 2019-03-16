<template>
  <div>
  <h1>Home</h1>
    <BaseButton
      :loading="loading"
      @click="logClick()">
      Kliknij
    </BaseButton>
    <BaseButton
      @click="changeLoading()">
      Zmień stan
    </BaseButton>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        loading:true
      }
    },
    methods: {
      logClick() {
        console.log('clicked');
      },
      changeLoading() {
        this.loading = !this.loading;
      }
    }
  }
</script>

<style scoped>
  button {
    display:block;
  }
</style>
