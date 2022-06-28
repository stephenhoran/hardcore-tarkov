import { defineStore } from 'pinia'
// @ts-ignore
import {v4 as uuidv4 } from 'uuid'

interface RootState {
  uuid: string
  discord_token: string
  refresh_token: string
  avatar: string
  id: string
  username: string
  authenticated: boolean
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    uuid: "",
    discord_token: "",
    refresh_token: "",
    avatar: "",
    id: "",
    username: "",
    authenticated: false
  } as RootState),

  actions: {
    newuuid() {
      this.uuid = uuidv4()
    },
    setuuid(uuid: string) {
      this.uuid = uuid
    },
    set_discord_token(token: string) {
      this.discord_token = token
      localStorage.setItem('discord_token', token)
    },
    set_refresh_token(token: string) {
      this.refresh_token = token
      localStorage.setItem('refresh_token', token)
    }
  }
})
