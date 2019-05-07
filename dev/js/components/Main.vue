<template>
  <div class="section">
    <nav class="navbar navbar-expand-md navbar-light fixed-top" style="background-color: #e3f2fd;">
      <div class="navbar-brand">SlimVue</div> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-for="menuItem in mainMenu" :key="menuItem.id" @click="menuClick(menuItem)" :class="{ 'active' : menuItem.isActive }">
            <router-link :to="menuItem.link" class="nav-link"> {{ menuItem.name }} </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><router-link to="/logout" class="nav-link">Выйти</router-link></li>
        </ul>
      </div>
    </nav>
    <main role="main" class="mt-5 pt-5">
      <router-view></router-view>
    </main>
  </div>
</template>
<style lang="stylus" scoped>

</style>


<script>
import { maxHeaderSize } from 'http';
export default {
  name: 'Main',
  data(){
    return{
      mainMenu: [
        {
          name: "Главная",
          link: "/",
          isActive: true
        },
        {
          name: "Все посты",
          link: "/post/all",
          isActive: false
        },
        {
          name: "Добавить пост",
          link: "/post/create",
          isActive: false
        }
      ]
    }
  },
  methods:{
    menuClick(menuItem) {
      if (menuItem.isActive) return;
      this.mainMenu.forEach(item => {
        item.isActive = false;
      });
      menuItem.isActive = !menuItem.isActive;
    }
  }
}
</script>