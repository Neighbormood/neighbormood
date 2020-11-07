<template>
  <v-card class="mt-4 mx-auto" max-width="400">
    <v-card-title>
      <div class="title font-weight-light mb-2">
        Last 4 Weeks
      </div>
    </v-card-title>
    <v-sheet
      class="v-sheet--offset mx-auto"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="trendLabels"
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
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: ["#f72047", "#ffd200", "#1feaea"],
      fill: false,
      type: 'trend',
      autoLineWidth: false
    };
  },
  computed: {
    ...mapState("statistics", ["trendValues", "trendLabels"])
  },
  methods: {
    ...mapActions("statistics", ["fetchMoodTrend"])
  },
  created() {
    this.fetchMoodTrend();
  }
};
</script>
