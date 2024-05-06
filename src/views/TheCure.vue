<script setup>
import { ref } from "vue";

const inputAlbum = ref({
  name: "",
  year: "",
  url: "",
});

// Добавить проверку на валидность года
function addToList() {
  console.log("pressed");
  if (checkInput()) {
    albums.value.push({
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
  albums.value.splice(index, 1);
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
const albums = ref([
  {
    name: "4:13 Dream",
    year: 2008,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/28589/9659c0dd.a.7936-3/200x200",
  },
  {
    name: "The Cure",
    year: 2004,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/192707/8590c725.a.6682099-1/200x200",
  },
  {
    name: "Bloodflowers",
    year: 2000,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/49876/7262e861.a.4418363-1/200x200",
  },
  {
    name: "Wild Mood Swings",
    year: 1996,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/38044/90e23cbc.a.2510707-1/200x200",
  },
  {
    name: "Show",
    year: 1993,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/49876/03a837ca.a.2514056-1/200x200",
  },
  {
    name: "Disintegration",
    year: 1989,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/28589/b711846c.a.62176-1/200x200",
  },
  {
    name: "Kiss Me, Kiss Me, Kiss Me",
    year: 1987,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/49707/27c688bc.a.85679-1/200x200",
  },
  {
    name: "The Head On The Door",
    year: 1985,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/41288/24aa482c.a.8663-1/200x200",
  },
  {
    name: "The Top",
    year: 1984,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/34131/bcb767ef.a.383700-1/200x200",
  },
  {
    name: "Pornography",
    year: 1983,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/4399834/171cec45.a.17997333-1/200x200",
  },
  {
    name: "Japanese Whispers",
    year: 1982,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/28589/affa9479.a.2515689-1/200x200",
  },
  {
    name: "Faith",
    year: 1981,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/139444/972288a2.a.6120745-1/200x200",
  },
  {
    name: "Seventeen Seconds",
    year: 1980,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/5236179/f9b397b3.a.18022949-1/200x200",
  },
  {
    name: "Three Imaginary Boys",
    year: 1979,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/49707/60804405.a.357802-1/200x200",
  },
]);
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
        <RouterLink to="/TheCure/Wish" class="links">Wish</RouterLink>
        <p class="album_year" id="wish">1992</p>
      </div>
    </div>

    <div v-for="album of albums" :key="album.name" class="album">
      <img class="album_img" :src="album.imageUrl" />
      <div class="album_info">
        <p class="album_name">{{ album.name }}</p>
        <p class="album_year">{{ album.year }}</p>
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
