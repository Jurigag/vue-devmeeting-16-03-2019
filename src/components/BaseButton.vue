<template>
  <button
    :disabled="loading || buttonDisabled"
    v-on="listeners">
    <ClipLoader
      v-if="loading"
      :loading="loading || buttonDisabled" class="spinner"
    />
    <slot></slot>
  </button>
</template>

<script>
  const DEFAULT_TEXT = 'Click';

  export default {
    name: "BaseButton",
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      disabled: Boolean
    },
    computed: {
      //5/ 7. To make sure that every listener works (e.g. @click, @focus),
      // we will bind all listeners except input listener
      listeners() {
        const { ...listeners } = this.$listeners;
        return listeners;
      },
      buttonDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },
  }
</script>

<style scoped>
  .spinner {
    float:left;
  }

  button {
    vertical-align: middle;
  }
</style>
