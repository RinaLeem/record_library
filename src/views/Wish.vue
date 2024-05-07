<script setup>
import { albumWish } from "./data.js";

function formatGenres(genres) {
  if (!genres || genres.length === 0) {
    return " - ";
  }
  return genres.join(", ");
}
</script>

<template>
  <div>
    <h1>The Cure</h1>
    <h2 class="pageTitle">Wish</h2>
    <br />
    <div v-for="album of albumWish" :key="album.id" class="album">
      <!-- <img class="albumImg" :src="album.imageUrl" /> -->
      <div class="albumInfo">
        <p class="songId">({{ album.id }})</p>
        <p class="songName">
          <b>{{ album.name }}</b>
        </p>
        <p class="songDuration">{{ album.duration }}</p>
        <p class="songGenre">{{ formatGenres(album.genre) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 0px;
}
.pageTitle {
  text-align: center;
}
p {
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 10px;
}
.albumInfo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-width: 600px;
  margin-bottom: 10px;
}
.songId {
  color: gainsboro;
}
.songName {
  color: red;
}
.songDuration {
  color: gray;
  margin-left: 10px;
}
.songGenre {
  margin-left: auto;
}
</style>
