<template>
  <div id="user-view" class="container">
    <h1 class="title">Today</h1>
    <h1 class="title">{{ today }}</h1>
    <v-divider />

    <v-subheader class="pl-0">
      What's your mood?
    </v-subheader>
    <v-slider v-model="slider" :thumb-size="24" thumb-label="always">
      <template v-slot:thumb-label="{ value }">
        {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
      </template>
    </v-slider>

    <p>Mood score: {{ slider }}</p>
    <v-text-field label="What's your mood?"></v-text-field>
    <!-- <v-btn @click="increaseScore(player_one)">
      <v-icon large>yo</v-icon>
    </v-btn>
    <h3>{{ player_one.score }}</h3> -->
  </div>
</template>


<script>
import moment from "moment";

export default {
  data() {
    return {
      player_one: {
        score: 0
      },
      today: moment(String(new Date())).format("DD.MM.YYYY"),
      satisfactionEmojis: [
        "😭",
        "😢",
        "☹️",
        "🙁",
        "😐",
        "🙂",
        "😊",
        "😁",
        "😄",
        "😍"
      ],
      slider: 50
    };
  }

  /*  methods: {
    increaseScore(player) {
      player.score += 1;

      console.log(player.score);
    },
    decreaseScore(player) {
      if (player.score > 0) {
        player.score -= 1;
      }
    }
  } */
};
</script>

<style>
.title {
  text-align: center;
}
</style>