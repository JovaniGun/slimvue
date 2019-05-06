import api from "../../api"

const state = {
  user: {}
}

const mutations = {
  setUser: (state, user) => state.user = user
}

const actions = {
  
}

const getters = {
  user : state => state.user
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};