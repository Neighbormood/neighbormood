<template>
  <div id="user-view" class="container">
    <h1 class="title">Today</h1>
    <h1 class="title">{{ today }}</h1>
    <!-- Date picker -->
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="user.date"
          label="Picker without buttons"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="user.date"
        @input="menu = false"
        @click="$refs.menu.save(date)"
      ></v-date-picker>
    </v-menu>
    <!-- Time picker -->
    <v-menu
      ref="menu"
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="time"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="user.time"
          label="Picker in menu"
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="menu2"
        v-model="user.time"
        full-width
        format="24h"
        @click:minute="$refs.menu.save(user.time)"
      ></v-time-picker>
    </v-menu>
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
    <!-- <p>Mood score: {{ user.moodScore }}</p> -->

    <v-textarea
      auto-grow
      filled
      color="purple"
      label="Describe your mood"
      rows="1"
      :value="user.moodDescription"
      @input="updateMoodText($event)"
      ref="input"
    ></v-textarea>
    <div class="centerText">
      <v-btn
        color="primary"
        large
        elevation="2"
        outlined
        rounded
        @click="sendMood()"
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
        uid: "UID",
        moodScore: 3,
        moodDescription: "",
        date: new Date().toISOString().substr(0, 10),
        time: moment().format("HH:mm")
      },

      /* Date picker */
      date: new Date().toISOString().substr(0, 10),
      menu: false,

      /* Time picker */
      menu2: false,
      modal2: false,

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

    updateMoodText(textMood) {
      this.user.moodDescription = textMood;
      console.log(this.user.moodDescription);
    },
    sendMood() {
      var obj = {
        user: {
          uid: this.user.uid,
          moodScore: this.user.moodScore,
          moodDescription: this.user.moodDescription,
          date: this.user.date,
          time: this.user.time
        }
      };
      console.log("Data to send: " + JSON.stringify(obj));
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
.v-slider--horizontal {
  min-height: 32px;
  margin-left: 8px;
  margin-right: 16px;
}
</style>
