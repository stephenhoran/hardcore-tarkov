<script setup lang="ts">
import {ref} from "vue";
import Login from "@/components/Login.vue"

const items = ref([
  {
    label: "Leaderboard",
    to: "/",
    icon: "pi pi-users",
  },
  {
    label: "Rules",
    to: "rules",
    icon: "pi pi-star"
  },
  {
    label: "Guides",
    to: "rules",
    icon: "pi pi-map"
  }
])

const signupDialog = ref(false)

function toggleDialog() {
  signupDialog.value = !signupDialog.value
}

</script>

<template>
  <Menubar :model="items">
    <template #start>
      Hardcore Tarkov
    </template>
    <template #end>
      <Button label="Season Signup" @click="toggleDialog"></Button>
      <Login />
    </template>
  </Menubar>

  <Dialog header="Registration" v-model:visible="signupDialog">
    Context
  </Dialog>
</template>

<style scoped>

</style>