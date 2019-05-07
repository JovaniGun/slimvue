import axios from "axios";

const BASE_URL = 'http://slimvue.me/api';

export default {
  login(data) {
    return axios.post(`${BASE_URL}/auth/login`, data);
  },
  //posts
  getPostById(id){
    return axios.get(`${BASE_URL}/post/${id}`)
  },
  getAllPosts(){
    return axios.get(`${BASE_URL}/post/all`);
  },
  deletePostById(id){
    return axios.get(`${BASE_URL}/post/delete/${id}`)
  },
  createPost(data){
    return axios.post(`${BASE_URL}/post/create`, data);
  }
   
}