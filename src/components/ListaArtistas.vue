
<script>
import Nav from '../components/Nav.vue'
import endpoints from '../endpoints'
  export default{
    name: 'ListaArtistas',
    components:{
      Nav,
    },
    data() {
      return {
        artistas: [],
        contArtistas: 0,

        canciones: [],
        contCanciones: 0,
      }
    },

    created() {
      endpoints.getListaArtistas().then((artistas)=>{
        this.artistas=artistas
        this.contArtistas= this.artistas.length
      })

      endpoints.getListaCanciones().then((canciones)=>{
        this.canciones=canciones
        this.contCanciones= this.canciones.length
      })
      
    },
  }
</script>

<template>
  <Nav />

  <div class="half">

    <section id="contador">
      <img src="../assets/auriculares.png" alt="">
      <p>¡Bienvenido a CANCIONES, un sitio web para escuchar música y saber sobre tus artistas favoritos! Haz click sobre
        las tarjetas para conocer más sobre estos cantantes y su discografía.</p>

      <div class="tarjetas-cont">
        <div class="card-cont">
          <p class="card-text-cont">Artistas en colección</p>
          <p class="card-text-cont">{{contArtistas}}</p>
        </div>
        <div class="card-cont">
          <p class="card-text-cont">Canciones en colección</p>
          <p class="card-text-cont">{{contCanciones}}</p>
        </div>
      </div>
    </section>

    <section id="tarjetas">
    <router-link :to="{ name: 'Artista', params: { id: artista?.id } }" class="card" id="tarjetaAnimada" v-for="artista in artistas">
        <div class="card-body">
          <p class="card-text"> {{artista.nombre}} </p>
        </div>
      </router-link>

      <!-- { name: 'Artista', params: { id: this.artista.id } } -->


      <!-- <router-link to="/artist/:id" class="card" id="tarjetaAnimada">
        <div class="card-body">
          <p class="card-text">{{ artista2.nombre }}</p>
        </div>
      </router-link>

      <router-link to="/artist/:id" class="card" id="tarjetaAnimada">
        <div class="card-body">
          <p class="card-text">{{ artista3.nombre }}</p>
        </div>
      </router-link>

      <router-link to="/artist/:id" class="card" id="tarjetaAnimada">
        <div class="card-body">
          <p class="card-text">{{ artista4.nombre }}</p>
        </div>
      </router-link> -->

    </section>

  </div>
</template>

<style scoped>
img{
  width: 100px;
}
.half {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

#contador {
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;

}

.tarjetas-cont {

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}

.card-cont {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 7px;
  height: 150px;
  width: 40%;
  padding: 0;


  border-radius: 5%;
  background-color: #494a4b;
  /* background-color: #e7e6ec; */
}

.card-body{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-family: 'Fjalla One', sans-serif;
}
.card-text-cont {
  padding: 3px;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  color: white;
}

#tarjetas {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.card {
  margin: 10px;

  height: 150px;
  width: 40%;
  padding: 0;


  border-radius: 5%;
  background-color: #343a40;
  /* background-color: #e7e6ec; */
}

.card-text {
  font-size: 1.5em;
  font-family: var(--bs-body-font-family);
  color: white;
}


</style>
