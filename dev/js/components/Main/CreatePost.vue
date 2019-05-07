<template>
<div class="container">
  <div class="jumbotron mt-5">
    <h2>Создать пост</h2>
    <form @click.prevent="addPost">
      <div class="form-group">
        <label for="title">Заголовок</label>
        <input type="text" class="form-control" id="title" v-model="title" placeholder="Заголовок">
      </div>
      <div class="form-group">
        <label for="content">Содержание</label>
        <textarea class="form-control" id="content" v-model="content" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>

</template>

<script>
import { mapActions } from "vuex"
export default {
  
  data(){
    return{
      title: "",
      content: ""
    }
  },
  methods:{
    ...mapActions("post", ["createPost"]),
    async addPost(){
      if(this.title.length>0 && this.content.length>0){
       await this.createPost({title:this.title, content:this.content});
        this.title = "";
        this.content = "";
      }
    }
  }
}
</script>
