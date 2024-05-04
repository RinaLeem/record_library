<template>
  <div class="container">
    <h1>Welcome to Smith's Audio Library</h1>
    <p>What Smith do you want to learn about?</p>
    <div class="colums">
      <div id="element1">
        <router-link to="/thecure" class="links">The Cure</router-link
        ><br /><br />
        <img
          src="https://m.media-amazon.com/images/I/81PoA51cw3L._AC_UF1000,1000_QL80_.jpg"
          alt="The Cure poster"
        /><br />
      </div>
      <div id="element2">
        <router-link to="/thesmiths" class="links">The Smiths</router-link
        ><br /><br />
        <img
          src="https://i.etsystatic.com/36642319/r/il/766e28/4490479645/il_fullxfull.4490479645_6on9.jpg"
          alt="The Smiths poster"
        /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
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
.links {
  color: black;
  line-height: 120%;
  font-size: 24px;
  text-align: center;
  margin: 30%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
