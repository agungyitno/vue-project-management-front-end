import { createStore } from "vuex";
import axios from "axios";
import auth from "./modules/auth";

axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.withCredentials = true;
export default createStore({
  modules: {
    auth: auth,
  },
});
