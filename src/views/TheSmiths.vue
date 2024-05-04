<script setup>
import { ref } from "vue";

const comments = ref([]);
const comment_name = ref("");
const comment_text = ref("");
let id = 0;

function addToList() {
  if (comment_text.value != "") {
    comments.value.push({
      name: comment_name.value,
      text: comment_text.value,
      id: id++,
    });
    comment_text.value = "";
  }
}
</script>

<template>
  <div class="container">
    <h1>The Smiths</h1>
    <p>albumography</p>

    <div class="album">
      <img
        class="album_img"
        src="https://avatars.yandex.net/get-music-content/28589/f28a81f5.a.296972-1/200x200"
      />
      <div class="album_info">
        <p class="album_name">Complete</p>
        <p class="album_year">2011</p>
      </div>
    </div>
    <div class="album">
      <img
        class="album_img"
        src="https://avatars.yandex.net/get-music-content/28589/4108299a.a.58466-6/200x200"
      />
      <div class="album_info">
        <p class="album_name">The Sound Of The Smiths</p>
        <p class="album_year">2008</p>
      </div>
    </div>
    <div class="album">
      <img
        class="album_img"
        src="https://avatars.yandex.net/get-music-content/38044/5b813fba.a.298107-3/200x200"
      />
      <div class="album_info">
        <p class="album_name">Strangeways, Here We Come</p>
        <p class="album_year">1987</p>
      </div>
    </div>
    <div class="album">
      <img
        class="album_img"
        src="https://avatars.yandex.net/get-music-content/175191/a6e1f13b.a.4742548-1/200x200"
      />
      <div class="album_info">
        <p class="album_name">The Queen Is Dead</p>
        <p class="album_year">1986</p>
      </div>
    </div>
    <div class="album">
      <img
        class="album_img"
        src="https://avatars.yandex.net/get-music-content/28589/2c2d8cf3.a.453365-1/200x200"
      />
      <div class="album_info">
        <p class="album_name">Meat Is Murder</p>
        <p class="album_year">1985</p>
      </div>
    </div>
    <div class="album">
      <img
        class="album_img"
        src="https://avatars.yandex.net/get-music-content/28589/4e4aa898.a.299260-1/200x200"
      />
      <div class="album_info">
        <p class="album_name">Hatful of Hollow</p>
        <p class="album_year">1984</p>
      </div>
    </div>
    <div class="album">
      <img
        class="album_img"
        src="https://avatars.yandex.net/get-music-content/38044/5518394f.a.298106-1/200x200"
      />
      <div class="album_info">
        <p class="album_name">The Smiths</p>
        <p class="album_year">1984</p>
      </div>
    </div>
    <!--  
    
    
    
    -->
    <br />
    <br />
    <form @submit.prevent="addToList">
      <input
        type="text"
        v-model.trim="comment_name"
        placeholder="Введите имя"
      />
      <input
        type="text"
        v-model.trim="comment_text"
        placeholder="Введите комментарий"
      />
      <input type="button" @click="addToList" value="Добавить" /><br /><br />
    </form>
    <div v-for="item of comments" :key="item.id" class="list">
      <label :for="item.id">{{ item.name }}: {{ item.text }}<br /> </label>
    </div>
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
