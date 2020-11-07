<template>
  <v-bottom-navigation app color="primary">
    <div class="d-flex align-center">
      <router-link to="/friends">Friends</router-link>
      <router-link to="/user"><b-icon-house></b-icon-house></router-link>
      <router-link to="/statistics">Stats</router-link>
    </div>
  </v-bottom-navigation>
</template>

<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
