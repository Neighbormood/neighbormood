export default {
  namespaced: true,
  state: {
    trendValues: null,
    trendLabels: null,
  },
  mutations: {
    setTrendValues(state, array) {
      state.trendValues = array;
    },
    setTrendLabels(state, array) {
      state.trendLabels = array;
    }
  },
  actions: {
    fetchMoodTrend: async function ({ commit }, data) {

      const valueArray = [];
      const labelArray = [];
      let weekCounter = 1;
      for (let i = 0; i < 29; i++) {
        valueArray.push(Math.floor(data[i].mood * 100));
        if (i % 7 === 0 && i != 28) {
          labelArray.push(`Week ${weekCounter}`);
          weekCounter++;
        } else {
          labelArray.push(" ");
        }
      }
      console.log("DATA:" + JSON.stringify(data))
      console.log(valueArray)
      console.log(labelArray)
      commit("setTrendValues", valueArray);
      commit("setTrendLabels", labelArray);
    }
  }
};
