<template>
  <div>
    <div v-if="loading"><loader /></div>
    <div v-else class="container">
      <v-card class="mt-4 mx-auto" max-width="400">
        <v-card-title>
          <div class="title font-weight-light mb-2">
            Last 4 Weeks
          </div>
        </v-card-title>
        <v-sheet class="v-sheet--offset mx-auto" max-width="calc(100% - 32px)">
          <v-sparkline
            :labels="trendLabels"
            label-size="14"
            :value="trendValues"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
          ></v-sparkline>
        </v-sheet>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: ["#1feaea", "#ffd200", "#f72047"],
      fill: false,
      type: "trend",
      autoLineWidth: false,
      loading: false
    };
  },
  computed: {
    ...mapState("statistics", ["trendValues", "trendLabels"])
  },
  methods: {
    ...mapActions("statistics", ["fetchMoodTrend"])
  },
  created() {
    this.loading = true;
    axios
      .get("https://neighbormood.herokuapp.com/users/2/") // Switch between users here
      .then(response => {
        this.fetchMoodTrend(response.data);
      })
      .finally(() => (this.loading = false)) //when the requests finish
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
