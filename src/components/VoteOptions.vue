<template>
  <div>
    <slot name="header">
      <h2>
        Vote options
      </h2>
    </slot>
    <ul>
      <slot v-for="vote in voteOptions" name="item" :vote="vote">
        <li :key="vote.name">
          {{ vote.name }}: {{ vote.count }}
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "VoteOptions",
    data() {
      return {
        voteOptions: [
          {
            name: 'yes',
            count: 0,
          },
          {
            name: 'maybe',
            count: 1,
          },
          {
            name: 'no',
            count: 2
          }
        ]
      }
    }
  }
</script>

<style scoped>
  ul {
    display: inline-block;
  }
</style>
