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
    <p>Это компонент The Smiths</p>

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

<style scoped></style>
