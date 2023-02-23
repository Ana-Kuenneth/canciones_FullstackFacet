<script>
  import ListaArtistas from './components/ListaArtistas.vue'
  export default{
    name: 'App',
    components:{
      ListaArtistas
    }
  }
</script>

<template>
  <!-- <ListaArtistas /> -->
  <router-view class="page"></router-view>
</template>


<style scoped>
</style>
