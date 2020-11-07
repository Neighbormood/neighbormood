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
      thumb-label="always"
      :max="6"
    >
      <template v-slot:thumb-label="{ value }">
        {{ satisfactionEmojis[value] }}
      </template>
    </v-slider>

    <p class="centerText">I am feeling {{ moodText(user.moodScore) }}</p>
    <p>Mood score: {{ user.moodScore }}</p>

    <v-textarea
      auto-grow
      filled
      color="purple"
      label="Describe your mood"
      rows="1"
      :value="user.moodDescription"
      @input="updateValue($event)"
      ref="input"
    ></v-textarea>
    <div class="centerText">
      <v-btn color="primary" large elevation="2" outlined rounded
        >Save Mood</v-btn
      >
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      user: {
        uid: "Get uid",
        moodScore: 3,
        moodDescription: ""
      },
      today: moment().format("DD.MM.YYYY HH:mm"),
      satisfactionEmojis: ["😭", "😢", "🙁", "😐", "🙂", "😊", "😍"],
      moodLabels: [
        "Like Crying",
        "Sad",
        "Bad",
        "Okay",
        "Good",
        "Happy",
        "In Love"
      ]
    };
  },
  props: {
    value: { default: "" },
    placeholder: { default: "" }
  },
  methods: {
    moodText(userMoodScore) {
      console.log(userMoodScore);
      return this.moodLabels[userMoodScore];
    },

    updateValue(textMood) {
      this.user.moodDescription = textMood;
      console.log(this.user.moodDescription);
    }
  }
};
</script>

<style>
.container {
  align-items: center;
}
.title {
  text-align: center;
}
.centerText {
  text-align: center;
}
</style>
