<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import MenuComponent from '@/components/MenuComponent.vue'
</script>

<template>
  <div id="app">
    <MenuComponent/>

    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}
</style>
