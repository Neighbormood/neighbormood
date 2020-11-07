<template>
  <div class="d-flex flex-wrap justify-space-around" id="friends-view">
    <v-card v-for="(group, index) in groups" :key="index" width="150">
      <v-card-title>
        {{ group.name }}
      </v-card-title>
      <v-card-text class="d-flex justify-center">
        {{ group.value }}
      </v-card-text>
    </v-card>
    <v-card width="150" class="d-flex justify-center align-center">
      <v-card-actions>
        <v-btn color="grey lighten-2" text>
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("friends", ["groups"])
  }
};
</script>