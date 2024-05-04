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
    <h1>The Cure</h1>
    <p>albumography</p>
    <RouterLink to="/Wish" class="links">Wish</RouterLink>

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

.links {
  color: black;
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
