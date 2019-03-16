<template>
  <li :key="item.name">
    <strong>Nazwa:</strong> {{ item.name }}<br/>
    <strong>Liczba:</strong> {{ item.count }}
  </li>
</template>

<script>
  export default {
    name: "CustomVoteOption",
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped>

</style>
