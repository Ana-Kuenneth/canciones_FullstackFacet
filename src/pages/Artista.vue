<script>
import endpoints from '../endpoints'
import Nav from '../components/Nav.vue'
import DetalleArtista from '../components/DetalleArtista.vue'
import Canciones from '../components/Canciones.vue'
export default {
  name: 'Artista',
  components: {
    Nav,
    DetalleArtista,
    Canciones
  },
  data() {
    return {
      artista1: {
        nombre: 'Miley Cyrus',
      },

      id: '',
      artista: {
        nombre: '',
        paisOrigen: '',
        genero: '',
        descripcion: '',
        listaCanciones: []
      },
      canciones: [],
      cancionesArtista: []
    }
  },
  created() {
      this.id = this.$route.params.id.toString();
      endpoints.getArtista(this.id).then((artista) => {
        this.artista = artista
        endpoints.getListaCanciones().then((canciones) => {
          console.log(canciones)
          console.log(this.artista.listaCanciones)
          
          canciones.forEach((cancion)=>{
            //console.log(cancion)
            if(this.artista.listaCanciones.includes(cancion.id)){
              this.cancionesArtista.push(cancion)
              console.log(this.cancionesArtista)
            }
          })

        })
      })
    },
  }


</script>

<template>
  <Nav />
  <h2>{{artista.nombre.toUpperCase()}}</h2>
  <div class="half">
    <section class="artista">
      <DetalleArtista :artista="artista" />
    </section>
    <section class="canciones">
      <h3 id="canciones-artista">Canciones del artista</h3>
      <Canciones :canciones="cancionesArtista"/>
    </section>
  </div>
  <router-link to="/">
    <h5>volver</h5>
  </router-link>
</template>

<style scoped>
body {
  margin: 0;
  /* display: flex; */
  /* justify-items: center; */
  min-width: 320px;
  min-height: 100vh;
  background-color: #dee2e6;
}

/* h1 {
  font-family: 'Oswald', sans-serif;
  font-size: 3.2em;
  line-height: 1.1;
  margin-top: 15px;
  margin-bottom: 30px;
} */

#canciones-artista:hover {
    color: #212529;
    text-shadow: 3px 4px 7px rgba(91, 90, 85, 0.883);
    transition-duration: 0.6s;
    
  }

.artista{
  /* width: 600px; */
  margin-left: 0px;
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
  /* width: 40%; */
}

#tarjetas-cont {

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}

.card-cont {
  margin: 20px;
  height: 150px;
  width: 40%;
  padding: 0;


  border-radius: 5%;
  background-color: #494a4b;
  /* background-color: #e7e6ec; */
}

.card-text-cont {
  padding: 5px;
  font-size: 1.2em;
  font-family: var(--bs-body-font-family);
  color: white;
}

#tarjetas {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.card {
  margin: 20px;
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

#tarjetaAnimada {
  transition-duration: 0.5s;
}

#tarjetaAnimada:hover {
  transform: scale(1.1);
  transition-timing-function: ease-in-out;
}


/* .read-the-docs {
  color: #888;
} */
</style>
