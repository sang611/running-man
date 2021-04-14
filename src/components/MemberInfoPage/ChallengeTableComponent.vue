<template>
  <a-table :columns="columns" :data-source="dataSource" />
</template>

<script>
export default {
name: "ChallengeTableComponent",
  props: ['dataSource', 'columns'],

}
</script>

<style scoped>

</style>
