<template>
  <div class="container">
      <div class="row">
        <div class="col-4">
          Hello {{ user.name}}
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return{
    }
      
  },
 computed: {
    ...mapGetters("user", ["user"])
  },
  created(){
    console.log(this.user.name);
  }
}

</script>