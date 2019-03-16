<template>
  <div>
  <h1>Home</h1>
    <BaseButton
      label="Kliknij"
      :loading="loading"
      @click="logClick()"
    />
    <BaseButton
      @click="changeLoading()"
      label="Zmień stan"
    />
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
