<script setup>
import { albumWish } from "./data.js";
</script>

<template>
  <div>
    <h1>The Cure</h1>
    <p>Wish</p>
    <div v-for="album of albumWish" :key="album.name" class="album">
      <!-- <img class="albumImg" :src="album.imageUrl" /> -->
      <div class="albumInfo">
        <p class="songName">index{{ album.name }}</p>
        <p class="songInfo">{{ album.duration }}</p>
        <p class="songInfo">{{ album.genre }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.albumInfo {
}
</style>
