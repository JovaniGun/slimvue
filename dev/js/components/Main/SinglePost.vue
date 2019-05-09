<template>
<div class="container">
  <div class="row d-flex justify-content-center">
    <div class="col-md-8 col-12">
      <h2>{{ title }}</h2>
    </div>
  </div>
  <div class="row d-flex justify-content-center mt-3">
    <div class="col-md-8 col-12">
      {{ content }}
    </div>
  </div>
</div>
  </template>

<script>
import api from "../../api"
export default {
  
  data(){
    return{
      title: "",
      content: ""
    }
  },
   methods:{
    //...mapActions("post", ["createPost"]),
    
    
  }
  ,
  async created(){
    const response = await api.getPostById(this.$route.params.id);
    const post = response.data;
    this.title = post.title;
    this.content = post.content;
  }
}
</script>
