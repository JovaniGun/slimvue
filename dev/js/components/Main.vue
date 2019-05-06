<template>
  <div class="section">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #e3f2fd;">
      <div class="navbar-brand">SlimVue</div> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Главная</router-link>
          </li>
          <li class="nav-item"><router-link to="/post/all" class="nav-link">Все посты</router-link></li>
          <li class="nav-item"><router-link to="/post/create" class="nav-link">Добавить пост</router-link></li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><router-link to="/logout" class="nav-link">Выйти</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style lang="stylus" scoped>

</style>


<script>
export default {
  name: 'Main'
}
</script>