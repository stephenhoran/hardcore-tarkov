<script setup lang="ts">
import {ref} from "vue";

const date = new Date();

const users = [
  {User: "JoshOG", Level: 61, "Last Updated": date.getDate(), Socials: ""},
  {User: "Tenpiece Chicken", Level: 45, "Last Updated": date.getDate(), Socials: ""}
]

</script>

<template>
  <image src="src/assets/1gphone_icon.webp"></image>
  <DataTable :value="users">
    <Column field="User" header="Player"></Column>
    <Column field="Level" header="Level"></Column>
    <Column field="Progress" header="Progress">
      <template #body="{data}">
        <img src="src/assets/1gphone_icon.webp">
        <img src="src/assets/Antique_Axe.webp">
        <img src="src/assets/BatteredBookIcon.webp">
        <img src="src/assets/Can_of_sprats_Icon.webp">
        <img src="src/assets/DDGMayoIcon.webp">
        <img src="src/assets/Deadlyslobs_beard_oil_icon.webp">
        <img src="src/assets/EnglishTeaIcon.webp">
        <img src="src/assets/Evasion_armband_icon.webp">
        <img src="src/assets/Fake_Mustache_icon.webp">
        <img src="src/assets/FireKlean_icon.webp">
        <img src="src/assets/FireSteelIcon.webp">
        <img src="src/assets/GoldenRoosterIcon.png">
        <img src="src/assets/Kotton_Beanie_icon.webp">
      </template>
    </Column>
    <Column field="Last Updated" header="Last Updated"></Column>
    <Column field="Socials" header="Socials"></Column>
  </DataTable>
</template>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
</style>