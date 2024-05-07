<script setup>
import { ref } from "vue";
import { albumsTheCure } from "./data.js";
import { zoomIn, zoomOut, checkInput } from "./function";

const inputAlbum = ref({
  name: "",
  year: "",
  url: "",
});

function addToList() {
  console.log("pressed");
  if (checkInput(inputAlbum)) {
    albumsTheCure.value.push({
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
  albumsTheCure.value.splice(index, 1);
}
</script>

<template>
  <div class="container">
    <h1>The Cure</h1>
    <p>albumography</p>

    <div class="album">
      <img
        class="albumImg zoom"
        src="https://avatars.yandex.net/get-music-content/41288/ae1dd326.a.2514680-1/200x200"
        @mouseover="zoomIn"
        @mouseout="zoomOut"
      />
      <div class="albumInfo">
        <RouterLink to="/11" class="links">Wish</RouterLink>
        <p class="albumYear" id="wish">1992</p>
      </div>
    </div>

    <div
      v-for="(album, index) of albumsTheCure"
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
#wish {
  margin-top: 40px;
}
.links {
  margin: 0px;
  color: red;
  line-height: 120%;
  font-size: 24px;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

a:hover {
  background-color: rgb(203, 16, 16);
  color: white;
}
</style>
