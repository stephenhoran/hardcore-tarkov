<script setup lang="ts">
import {ref} from "vue";
import { useUserStore } from "@/stores/user";

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

</script>

<template>
<a :href=buildDiscordLink()><Button label="Login"></Button></a>
</template>

<style scoped>

</style>