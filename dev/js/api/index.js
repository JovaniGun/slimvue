import axios from "axios";

const BASE_URL = 'http://slimvue.me/api';

export default {
  login(data) {
    return axios.post(`${BASE_URL}/auth/login`, data);
  },
  //posts
  getAllPosts(){
    return axios.get(`${BASE_URL}/post/all`);
  },
  deletePostById(id){
    return axios.get(`${BASE_URL}/post/delete/${id}`)
  }
   
}