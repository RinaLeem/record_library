<script setup>
import { ref } from "vue";
import { albumsTheSmith } from "./data.js";
import { zoomIn, zoomOut } from "./zoom";

const inputAlbum = ref({
  name: "",
  year: "",
  url: "",
});

function addToList() {
  console.log("pressed");
  if (checkInput()) {
    albumsTheSmith.value.push({
      name: inputAlbum.value.name,
      year: inputAlbum.value.year,
      imageUrl: inputAlbum.value.url,
    });
    inputAlbum.value.name = "";
    inputAlbum.value.year = "";
    inputAlbum.value.url = "";
  }
}
function deleteFromList(index) {
  albumsTheSmith.value.splice(index, 1);
}

function checkInput() {
  if (
    inputAlbum.value &&
    inputAlbum.value.name != "" &&
    inputAlbum.value.year >= "100" &&
    inputAlbum.value.year <= "2024" &&
    inputAlbum.value.year != "" &&
    inputAlbum.value.url != ""
  )
    return true;
  else return false;
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
        <button @click="deleteFromList(index)" class="button">X</button>
      </div>
    </div>
    <!--  

    -->
    <br />
    <br />
    <form @submit.prevent="addToList">
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
        @click="addToList"
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
