<template>
  <div id="user-view" class="container">
    <h1 class="title">Today</h1>
    <h1 class="title">{{ today }}</h1>
    <v-divider />

    <v-subheader class="pl-0">
      What's your mood?
    </v-subheader>
    <v-slider
      color="purple"
      v-model="user.moodScore"
      :thumb-size="24"
      :tick-labels="ticksLabels"
      thumb-label="always"
      :max="6"
    >
      <template v-slot:thumb-label="{ value }">
        {{ satisfactionEmojis[value] }}
      </template>
    </v-slider>
    <p class="centerText">I am feeling {{ moodText(user.moodScore) }}</p>
    <p>Mood score: {{ user.moodScore }}</p>
    <!--  <v-text-field label="What's your mood?"> </v-text-field> -->
    <!--     <v-btn @click="increaseScore(player_one)">
      <v-icon large>yo</v-icon>
    </v-btn> -->

    <v-textarea
      auto-grow
      filled
      color="purple"
      label="Describe your mood"
      rows="1"
    ></v-textarea>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      user: {
        uid: "Get uid",
        moodScore: 50
      },
      today: moment(String(new Date())).format("DD.MM.YYYY"),
      satisfactionEmojis: ["😭", "😢", "🙁", "😐", "🙂", "😊", "😍"],
      moodLabels: ["Crying", "Sad", "Bad", "Okay", "Good", "Happy", "In Love"]
    };
  },
  methods: {
    moodText(userMoodScore) {
      console.log(userMoodScore);
      return this.moodLabels[userMoodScore];
    }
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
.centerText {
  text-align: center;
}
</style>
