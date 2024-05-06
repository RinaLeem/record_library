<script setup>
import { ref } from "vue";
import { albumsTheCure } from "./data.js";

const inputAlbum = ref({
  name: "",
  year: "",
  url: "",
});

function addToList() {
  console.log("pressed");
  if (checkInput()) {
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

// Перенести список в отдельный файл
</script>

<template>
  <div class="container">
    <h1>The Cure</h1>
    <p>albumography</p>

    <div class="album">
      <img
        class="album_img"
        src="https://avatars.yandex.net/get-music-content/41288/ae1dd326.a.2514680-1/200x200"
      />
      <div class="album_info">
        <RouterLink to="/11" class="links">Wish</RouterLink>
        <p class="album_year" id="wish">1992</p>
      </div>
    </div>

    <div v-for="album of albumsTheCure" :key="album.name" class="album">
      <img class="album_img" :src="album.imageUrl" />
      <div class="album_info">
        <p class="album_name">{{ album.name }}</p>
        <p class="album_year">{{ album.year }}</p>
        <button @click="deleteFromList(index)">X</button>
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
