<template>
  <div id="user-view" class="container">
    <h1 class="title">Neighbormood</h1>
    <h1 class="title">Today<!-- {{ today }} --></h1>
    <v-divider />
    <!-- Previous posts -->
    <div v-if="show">
      <h1 class="larger-font">Average mood</h1>
      <!--  <h1 v-for="(mood, index) in moods" :key="index" class="big-font">
        {{ satisfactionEmojis[mood.moodScore] }}
      </h1> -->
      <h1 class="big-font">
        {{ satisfactionEmojis[6] }}
      </h1>
      <v-card
        class="card-padding"
        v-for="(mood, index) in moods"
        :key="index"
        width="100%"
      >
        <v-card-title>
          {{ satisfactionEmojis[mood.moodScore] }} {{ mood.moodShortDesc }}
        </v-card-title>
        <v-card-text class="d-flex justify-center">
          {{ mood.moodDescription }}
        </v-card-text>
      </v-card>

      <v-divider />
      <div class="centerText">
        <v-btn
          color="purple"
          large
          elevation="2"
          outlined
          rounded
          @click="addMood()"
          >Add Mood</v-btn
        >
      </div>
    </div>
    <div v-if="!show">
      <!-- Date picker -->
      <!--  <v-menu
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
            label="Date"
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
     
      <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="user.time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="user.time"
            label="Time"
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
          format="24hr"
          @click:minute="$refs.menu.save(user.time)"
        ></v-time-picker>
      <v-divider />
      </v-menu> -->
      <h1 class="big-font">
        {{ satisfactionEmojis[user.moodScore] }}
      </h1>

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
          {{ moodSlider(value) }}
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
          color="purple"
          large
          elevation="2"
          outlined
          rounded
          @click="sendMood()"
          >Save Mood</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
//import axios from "axios";

export default {
  /* mounted() {
    axios
      .get("https://neighbormood.herokuapp.com/users/2/")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, */
  computed: {
    ...mapState("friends", ["moods", "moodHistory"])
  },
  data() {
    return {
      user: {
        uid: "UID",
        moodScore: 4,
        moodDescription: "",
        date: new Date().toISOString().substr(0, 10),
        time: moment().format("HH:mm")
      },

      show: true,
      /* Date and Time picker */
      menu: false,
      menu2: false,

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
  methods: {
    moodSlider(score) {
      this.user.moodScore = score;
      return this.satisfactionEmojis[score];
    },
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
      this.show = !this.show;
    },
    addMood() {
      this.show = !this.show;
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
.larger-font {
  font-size: 2.25rem;
  text-align: center;
}
.big-font {
  font-size: 9.25rem;
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
.card-padding {
  margin-top: 0.5rem;
}
</style>
