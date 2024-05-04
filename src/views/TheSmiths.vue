<script setup>
import { ref } from "vue";

const comments = ref([]);
const comment_text = ref("");
let id = 0;

function addToList() {
  if (comment_text.value != "") {
    comments.value.push({
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
        src="https://avatars.yandex.net/get-music-content/38044/5518394f.a.298106-1/200x200"
      />
      <div class="album_info">
        <p class="album_name">Name</p>
        <p class="album_year">1999</p>
      </div>
    </div>
    <!--  
    
    
    
    -->
    <br />
    <br />
    <form @submit.prevent="addToList">
      <input
        type="text"
        v-model.trim="comment_text"
        placeholder="Введите комментарий"
      />
      <input type="button" @click="addToList" value="Добавить" /><br /><br />
    </form>
    <div v-for="item of comments" :key="item.id" class="list">
      <label :for="item.id">
        {{ item.text }}
      </label>
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
.album {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-width: 600px;
}
.album_img {
  width: 200px;
}
.album_info {
  margin-left: 10px;
}
.album_name {
  color: red;
  font-size: 24px;
}
.album_year {
  color: gray;
  font-size: 12px;
}
</style>
