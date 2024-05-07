<script setup>
import { onMounted, ref } from "vue";
import { zoomIn, zoomOut, checkInput } from "./function.js";
import {
  openDB,
  addAlbum as addToAlbums,
  deleteAlbum as deleteFromAlbums,
  getAllAlbums,
} from "./albums.js";

onMounted(async () => {
  await openDB();
  updateAlbumsList(albumsTheSmith);
});

const albumsTheSmith = ref([]);

const inputAlbum = ref({
  name: "",
  year: "",
  url: "",
});

function addAlbum() {
  if (checkInput(inputAlbum)) {
    const name = inputAlbum.value.name;
    const year = inputAlbum.value.year;
    const url = inputAlbum.value.url;
    inputAlbum.value.name = "";
    inputAlbum.value.year = "";
    inputAlbum.value.url = "";
    const newAlbum = {
      name: name,
      year: year,
      imageUrl: url,
    };
    addToAlbums(newAlbum);
    updateAlbumsList(albumsTheSmith);
  }
}

function deleteAlbum(index) {
  console.log("delete" + index);
  const albumToDelete = albumsTheSmith.value[index];
  deleteFromAlbums(albumToDelete);
  updateAlbumsList(albumsTheSmith);
}

function updateAlbumsList(albumsTheSmith) {
  getAllAlbums((albums) => {
    console.log("Received albums from database:", albums);
    albumsTheSmith.value = albums;
    console.log("albumsTheSmith:", albumsTheSmith.value);
  });
}
</script>

<template>
  <div class="container">
    <h1>The Smiths</h1>
    <p>albumography</p>

    <div
      v-for="(album, index) of albumsTheSmith"
      :key="album.name"
      class="album"
    >
      <img
        class="albumImg zoom"
        :src="album.imageUrl"
        @mouseover="zoomIn"
        @mouseout="zoomOut"
      />
      <div class="albumInfo">
        <p class="albumName">{{ album.name }}</p>
        <p class="albumYear">{{ album.year }}</p>
        <button @click="deleteAlbum(index)" class="button">X</button>
      </div>
    </div>

    <!--  
    
    -->
    <br />
    <br />
    <form @submit.prevent="addAlbum">
      <input
        type="text"
        v-model.trim="inputAlbum.name"
        placeholder="album name"
      />
      <input
        type="number"
        v-model.trim="inputAlbum.year"
        placeholder="year"
        max="2024"
        min="1000"
      />
      <input type="url" v-model="inputAlbum.url" placeholder="album pic" />
      <input
        type="button"
        class="button"
        @click="addAlbum"
        value=" Add "
      /><br /><br />
    </form>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 0px;
}
p {
  margin-top: 0px;
  margin-bottom: 40px;
}
</style>
