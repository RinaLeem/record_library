<template>
  <div class="container">
    <h1>Welcome to Smith's Audio Library</h1>
    <p>What Smith do you want to learn about?</p>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.colums {
  padding: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.element {
  margin-left: 20px;
  margin-right: 20px;
}
img {
  width: 300px;
  height: 100%;
  border-style: outset;
  border-color: black;
}
</style>
