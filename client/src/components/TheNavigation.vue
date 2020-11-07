<template>
  <nav class="nav" id="nav">
    <router-link to="/friends"></router-link>
    <router-link to="/user"><b-icon-house></b-icon-house></router-link>
    <router-link to="/statistics">Stats</router-link>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
