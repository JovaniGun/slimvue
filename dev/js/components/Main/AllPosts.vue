<template>
<div class="container">
  <div class="row justify-content-center mt-4 pt-2">
      <div class="card m-3" style="width: 18rem;"
        v-for="post in posts" :key="post.id"
      >
        <div class="card-body">
          <div class="card-header">
            <h5 class="card-title">{{ post.title }}</h5>
            <button @click.prevent="deletePostById(post.id)"><i class="fas fa-times" style="font-size: 1.2rem; color:red;"></i></button>
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
    margin-bottom: 2.3rem;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #fff; 
  }
   a.card-text{
    margin-top: 1.2rem;
    font-size: 1.1rem;
    text-decoration: none;
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
