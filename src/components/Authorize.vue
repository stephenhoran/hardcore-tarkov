<script setup lang="ts">
import {useRoute} from "vue-router";
import axios from "axios";
import { useUserStore } from "@/stores/user";

const api_endpoint: string = 'https://discord.com/api/v10'
const client_id: string = '989175084902133811'
const client_secret: string = import.meta.env.VITE_DISCORD_CLIENT_SECRET
const redirect_uri: string = import.meta.env.VITE_SITE_URL

const headers = {'Content-Type': 'application/x-www-form-urlencoded'}

const route = useRoute()
const userStore = useUserStore()

let params = new URLSearchParams()
params.append('client_secret', client_secret)
params.append('client_id', client_id)
params.append('grant_type', 'authorization_code')
params.append('code', String(route.query['code']))
params.append('redirect_uri', redirect_uri + "/authorize")

await axios.post(api_endpoint + "/oauth2/token", params, {headers})
    .then((response: any) => {
      userStore.set_discord_token(response.data.access_token)
      userStore.set_refresh_token(response.data.refresh_token)
    })

await axios.get(api_endpoint + "/users/@me", {headers : {'Authorization': 'Bearer ' + userStore.discord_token}})
    .then((response: any) => {
      userStore.avatar = response.data.avatar
      userStore.id = response.data.id
      userStore.username = response.data.username
      userStore.authenticated = true
    })



</script>

<template>

</template>
