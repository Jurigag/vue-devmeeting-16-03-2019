<template>
  <div>
  <h1>Score</h1>
    <VoteOptions/>
    <VoteOptions>
      <template #header>
        <h2>Wyniki głosowania</h2>
      </template>
      <template v-slot:item="{ vote }">
        <CustomVoteOption
          :item="vote"
        />
      </template>
    </VoteOptions>
  </div>
</template>

<script>
  import VoteOptions from "@/components/VoteOptions";
  import CustomVoteOption from "@/components/CustomVoteOption";
  export default {
    name: "Score",
    components: {CustomVoteOption, VoteOptions}
  }
</script>

<style scoped>

</style>
