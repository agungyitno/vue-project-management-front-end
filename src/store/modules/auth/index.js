import axios from "axios";
const auth = {
  state: {
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    setUser(state, user) {
      state.user = user;
    },
    removeToken() {
      // state.token = null;
      localStorage.removeItem("token");
    },
  },
  actions: {
    async register(_, credentials) {
      const { data } = await axios.post("/register", credentials);
      return data;
    },
    async login({ commit }, credentials) {
      const { data } = await axios.post("/login", credentials);
      commit("setToken", data.token);
    },
    async logout() {
      await axios.post("/logout");
      this.dispatch("forceLogout");
    },
    forceLogout({ commit }) {
      commit("removeToken");
      commit("setUser", null);
    },
    async getLogged({ commit }) {
      const { data } = await axios.get("/profile");
      commit("setUser", data);
      return data;
    },
  },
  getters: {
    isLogged: (state) => !!state.token,
  },
};

export default auth;
