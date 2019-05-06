import api from "../../api"
import router from "../../router"

const state = {
  isLogin: false,
  token: localStorage.getItem("ID") || ""
}

const mutations = {
  userLogin: (state, token) => {
    state.isLogin = true;
    state.token = token;
  }
}

const actions = {
  async login({dispatch, commit}, data){
    const response = await api.login(data);
    var user = response.data;
    commit("userLogin", user.token);
    localStorage.setItem("ID", user.token)
    commit("user/setUser", user, {root:true});
    ////console.log(user)
    router.push("/");
  }
}

const getters = {
  isLogin : state => state.isLogin,
  token   : state => state.token
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};