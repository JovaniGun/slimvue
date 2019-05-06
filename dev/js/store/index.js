import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";
import post from "./modules/post";
//import news from "./modules/news";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    post
    //news
  }
})