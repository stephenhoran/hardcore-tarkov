<script setup lang="ts">
import {ref} from "vue";

const date = new Date();

const users = [
  {User: "JoshOG", Level: 61, "Last Updated": date.getDate(), Twitch: ""}
]

</script>

<template>
  <DataTable :value="users">
    <Column field="User" header="Player"></Column>
    <Column field="Level" header="Level"></Column>
    <Column field="Last Updated" header="Last Updated"></Column>
    <Column field="Twitch" header="Twitch"></Column>
  </DataTable>
</template>

<style scoped>

</style>