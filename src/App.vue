<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="links">Main</RouterLink>
        <RouterLink to="/TheCure" class="links">TheCure</RouterLink>
        <RouterLink to="/TheSmiths" class="links">TheSmiths</RouterLink>
      </nav>
    </div>
  </header>
  <br />

  <RouterView />
</template>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
.links {
  font-size: 16px;
  text-align: center;
}
h1 {
  font-size: 48px;
  font-variant: small-caps;
  text-align: center;
  margin: 15px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gainsboro;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  background-color: whitesmoke;
}

nav a {
  display: inline-block;
  padding: 0 10px;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 5px;
}

@media (min-width: 1024px) {
  header {
    line-height: 1.5;
    max-height: 100vh;
  }
  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
