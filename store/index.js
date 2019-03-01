export const state = () => ({
  counter: 0
});

export const actions = {
  nuxtServerInit({ commit }, { req }) {},
  increment({ commit }) {
    commit("increment");
  }
};

export const mutations = {
  increment(state) {
    state.counter++;
  },
  initialState(state) {}
};
