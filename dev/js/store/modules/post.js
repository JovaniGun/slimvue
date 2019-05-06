import api from "../../api"

const state = {
  posts: {}
}

const mutations = {
  setPosts: (state, posts) => state.posts = posts
}

const actions = {
  async getPosts({ commit }){
    try{
      const response = await api.getAllPosts();
      const posts    = response.data;
      commit("setPosts", posts) 
    }catch(err)
    {
      console.warn(err);
    }
  },
  async deletePostById({commit}, data){
    try{
       const response = await api.deletePostById(data);
       const posts    = response.data;
       commit("setPosts", posts) 
       //console.log(data);
    }catch(err)
    {
      console.warn(err);
    }
  }
}

const getters = {
  posts : state => state.posts
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};