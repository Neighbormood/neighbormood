<template>
  <v-bottom-navigation app color="primary">
    <div class="d-flex justify-space-around align-center">
      <router-link to="/friends">
        <v-icon>
          mdi-account-group
        </v-icon>
      </router-link>
      <router-link to="/user">
        <v-icon>
          mdi-home
        </v-icon>
      </router-link>
      <router-link to="/statistics">
        <v-icon>
          mdi-chart-bar
        </v-icon>
      </router-link>
    </div>
  </v-bottom-navigation>
</template>

<style scoped>
.d-flex {
  width: 100%;
}
</style>
