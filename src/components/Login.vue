<script setup lang="ts">
import {ref} from "vue";
import { useUserStore } from "@/stores/user";
import type {MenuItem} from "primevue/menuitem";

const DiscordOAuthLink = "https://discord.com/oauth2/authorize?response_type=code&client_id=989175084902133811&scope=identify&prompt=none&redirect_uri=" + import.meta.env.VITE_DISCORD_REDIRECT_URL

const userStore = useUserStore()

function buildDiscordLink(): string {
  let localState = sessionStorage.getItem('state')

  if (localState == null || localState === "") {
    userStore.newuuid()
    localState = userStore.uuid
  }

  sessionStorage.setItem('state', localState)

  return DiscordOAuthLink + "&state=" + userStore.uuid
}

function buildAvatarLink(): string {
  return "https://cdn.discordapp.com/avatars/" + userStore.id +
      "/" + userStore.avatar
}


const items: MenuItem = ref([
  {
    label: 'Profile',
    icon: 'pi pi-user'
  },{
    label: 'Progress',
    icon: 'pi pi-database'
  },{
    label: 'Logout',
    icon: 'pi pi-sign-out'
  }
])
</script>

<template>
  <template v-if="userStore.authenticated">
    <SplitButton :model="items" :label="userStore.username"></SplitButton>
  </template>
  <template v-else>
    <a :href=buildDiscordLink()><Button label="Login"></Button></a>
  </template>
</template>

<style scoped>

</style>