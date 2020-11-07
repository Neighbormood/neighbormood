export default {
  namespaced: true,
  state: {
    userId: null
  },
  mutations: {
    setUserId(state, id) {
      state.userId = id;
    }
  },
  actions: {
    loadUserId({ commit }, id) {
      commit("setUserId", id);
    }
  }
};
