<template>
  <div class="container">
    <h1>Welcome to Smith's Audio Library</h1>
    <p>What<b> Smith </b>do you want to learn about?</p>
    <div class="colums">
      <div id="element1">
        <router-link to="/10" class="links">The Cure</router-link><br /><br />
        <img
          class="zoom"
          src="https://m.media-amazon.com/images/I/81PoA51cw3L._AC_UF1000,1000_QL80_.jpg"
          alt="The Cure poster"
          @mouseover="zoomIn"
          @mouseout="zoomOut"
        /><br />
      </div>
      <div id="element2">
        <router-link to="/20" class="links">The Smiths</router-link><br /><br />
        <img
          class="zoom"
          src="https://i.etsystatic.com/36642319/r/il/766e28/4490479645/il_fullxfull.4490479645_6on9.jpg"
          alt="The Smiths poster"
          @mouseover="zoomIn"
          @mouseout="zoomOut"
        /><br />
      </div>
    </div>
  </div>
</template>

<script setup>
function zoomIn(event) {
  event.target.style.transform = "scale(1.5)";
}

function zoomOut(event) {
  event.target.style.transform = "scale(1)";
}
</script>

<style scoped>
.zoom {
  transition: transform 0.5s ease-in-out;
}

.colums {
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#element1 {
  margin-right: 120px;
}
#element2 {
  margin-left: 280px;
}
img {
  width: 400px;
  height: 100%;
}
b:hover {
  color: red;
  font-family: "Arial", "Verdana", sans-serif;
}
.links {
  color: black;
  line-height: 120%;
  font-size: 24px;
  text-align: center;
  margin: 30%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
nav a {
  display: inline-block;
  padding: 0 10px;
  border-left: 1px solid var(--color-border);
  background-color: black;
}
a:hover {
  background-color: rgb(79, 79, 79);
  color: white;
}
</style>

<style>
.album {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-width: 600px;
  margin-bottom: 10px;
}
.albumImg {
  width: 200px;
}
.albumInfo {
  margin-left: 10px;
}
.albumName {
  color: red;
  font-size: 24px;
}
.albumYear {
  color: gray;
  font-size: 16px;
}
input {
  width: fit-content;
  border-style: solid;
  border-color: red;
  padding: 5px;
}
.button {
  background-color: #fff;
  border-style: none;
  margin-left: 20px;
  margin-right: 20px;
  color: red;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
