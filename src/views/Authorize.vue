<script setup lang="ts">
import {useRoute} from "vue-router";
import axios from "axios";

const api_endpoint: string = 'https://discord.com/api/v10'
const client_id: string = '989175084902133811'
const client_secret: string = import.meta.env.VITE_DISCORD_CLIENT_SECRET
const redirect_uri: string = import.meta.env.VITE_SITE_URL

const headers = {'Content-Type': 'application/x-www-form-urlencoded'}

const route = useRoute()

let params = new URLSearchParams()
params.append('client_secret', client_secret)
params.append('client_id', client_id)
params.append('grant_type', 'authorization_code')
params.append('code', String(route.query['code']))
params.append('redirect_uri', redirect_uri + "/authorize")


console.log(params.toString())

axios.post(api_endpoint + "/oauth2/token", params, {headers}).then(response => console.log(response))

</script>

<template>
</template>
