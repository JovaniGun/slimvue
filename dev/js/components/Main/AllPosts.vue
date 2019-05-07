<template>
<div class="container">
  <div class="row justify-content-center mt-4 pt-5">
      <div class="card m-3" style="width: 18rem;"
        v-for="post in posts" :key="post.id"
      >
        <div class="card-body">
          <div class="card-header">
            <h5 class="card-title">{{ post.title }}</h5>
            <button @click.prevent="deletePostById(post.id)"><i class="fas fa-trash" style="margin-bottom: .75rem; color:red;"></i></button>
          </div>
          <router-link class="card-text" :to="`/post/${post.id}`">{{ post.preview }}</router-link>
          <!-- <a href="#" class="card-link">Ссылка карты</a> -->
        </div>
      </div>
    </div>
</div>
</template>
<style scoped>
  .card-header{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff; 
  }
  button{
    background-color: #fff;
    border: none;
  }
</style>

<script>
  import { mapGetters, mapActions } from "vuex"
export default {
  created(){
    this.getPosts();
  },
  methods:{
    ...mapActions("post",["getPosts","deletePostById"]),

  },
  computed:{
        ...mapGetters("post",["posts"])
  }
}
</script>
