<script setup lang="ts">

const Rules: string[] = [
  "When creating a new account, all money and items must be deleted, including your knife. You only start with the container.",
  "You cannot purchase equipment from Dealers or Flea Market using Money.",
  "You are allowed to Barter for equipment.",
  "No Auction at all.",
  "Secure container is for bringing items into the raid ONLY. Nothing can be added during the raid.",
  "Mission specific items can be bought using a money.",
  "No SCAV raids allowed.",
  "You can play with others as long as they are playing hardcore as well.",
  "Only allowed to heal from therapist post raid upon death, if you survive, you cannot use the post raid healing service.",
  "Crafting from the hideout is allowed.",
  "Money now can be used in Global Cash Stack for Clothing or Hideout Upgrades and Armor Repair."
]
</script>

<template>
  <Card class="align-content-center">
    <template #content>
      <ul>
        <li v-for="rule in Rules">{{ rule }}</li>
      </ul>
    </template>
  </Card>
</template>

<style scoped>
li {
  font-size: 24px;
}
</style>
