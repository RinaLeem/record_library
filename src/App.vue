<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Main</RouterLink>
        <RouterLink to="/TheCure">TheCure</RouterLink>
        <RouterLink to="/TheSmiths">TheSmiths</RouterLink>
      </nav>
    </div>
  </header><br>

  <RouterView />
</template>

<style>
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
  
  background-color:gainsboro;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  background-color:whitesmoke;
}

nav a {
  color:black;
  display: inline-block;
  padding: 0 10px;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    line-height: 1.5;
    max-height: 100vh;
    }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
