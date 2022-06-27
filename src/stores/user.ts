import { defineStore } from 'pinia'
// @ts-ignore
import {v4 as uuidv4 } from 'uuid'

interface RootState {
 uuid: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    uuid: ""
  } as RootState),

  actions: {
    newuuid() {
      this.uuid = uuidv4()
    },
    setuuid(uuid: string) {
      this.uuid = uuid
    }
  }
})
