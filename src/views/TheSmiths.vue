<script setup>
import { ref } from "vue";

const comment_name = ref("");
const comment_year = ref("");
const comment_url = ref("");

function addToList() {
  console.log("pressed");
  if (
    comment_year.value != "" &&
    comment_name.value != "" &&
    comment_url.value != ""
  ) {
    albums.value.push({
      name: comment_name.value,
      year: comment_year.value,
      imageUrl: comment_url.value,
    });
    comment_name.value = "";
    comment_year.value = "";
    comment_url.value = "";
  }
}

const albums = ref([
  {
    name: "Complete",
    year: 2011,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/28589/f28a81f5.a.296972-1/200x200",
  },
  {
    name: "The Sound Of The Smiths",
    year: 2008,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/38044/5518394f.a.298106-1/200x200",
  },
  {
    name: "Strangeways, Here We Come",
    year: 1987,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/28589/4e4aa898.a.299260-1/200x200",
  },
  {
    name: "The Queen Is Dead",
    year: 1986,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/28589/2c2d8cf3.a.453365-1/200x200",
  },
  {
    name: "Meat Is Murder",
    year: 1985,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/175191/a6e1f13b.a.4742548-1/200x200",
  },
  {
    name: "Hatful of Hollow",
    year: 1984,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/38044/5b813fba.a.298107-3/200x200",
  },
  {
    name: "The Smiths",
    year: 1984,
    imageUrl:
      "https://avatars.yandex.net/get-music-content/28589/4108299a.a.58466-6/200x200",
  },
]);
</script>

<template>
  <div class="container">
    <h1>The Smiths</h1>
    <p>albumography</p>

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
      <input type="text" v-model.trim="comment_name" placeholder="album name" />
      <input type="number" v-model.trim="comment_year" placeholder="year" />
      <input type="url" v-model="comment_url" placeholder="album pic" />
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
