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
    fetchMoodTrend: async function({ commit }) {
      const valueArray = [];
      const labelArray = [];
      let weekCounter = 1;
      for (let i = 0; i < 29; i++) {
        valueArray.push(Math.floor(Math.random() * 100));
        if (i % 7 === 0 && i != 28) {
          labelArray.push(`Week ${weekCounter}`);
          weekCounter++;
        } else {
          labelArray.push(" ");
        }
      }
      commit("setTrendValues", valueArray);
      commit("setTrendLabels", labelArray);
    }
  }
};
