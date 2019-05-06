import Vue from "vue";
import Router from "vue-router";
//import store from "../store";
import Main from "../components/Main.vue"
import MainPage from "../components/Main/MainPage.vue"
import AllPosts from "../components/Main/AllPosts.vue"
import CreatePost from "../components/Main/CreatePost.vue"
import Login from "../components/Login.vue"
Vue.use(Router);

const router = new Router({
  routes: [
     {
       path: "/",
       name: "main",
       component: Main,
       children: [
         {
           name: 'main-page',
           path: "/",
           component: MainPage
         },
         {
           name:'main-posts',
           path: "post/all",
           component: AllPosts
         },
         {
           name:'main-postcreate',
           path: "post/create",
           component: CreatePost
         }

       ]
     },
     {
       path: '/login',
       name: 'login',
       component: Login
     }
  ]
});

export default router;