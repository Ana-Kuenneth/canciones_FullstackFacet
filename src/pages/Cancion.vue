<script>
import Nav from '../components/Nav.vue'
import Volver from '../components/Volver.vue'
import DatosCancion from '../components/DatosCancion.vue'
import endpoints from '../endpoints'

export default {
  name: 'Cancion',
  components: {
    Nav,
    DatosCancion,
    Volver,
  },
  data() {
    return {
      id: '',
      cancion: {
        nombre: '',
        duracion: '',
        album: '',
        imagen: '',
      },

      nombreArtista: ''
    }
  },
  created() {
    //obtengo cancion y sus datos
    this.id = this.$route.params.id.toString();
    endpoints.getCancion(this.id).then((cancion) => {
      this.cancion = cancion
      console.log(cancion)
    })
  }
}

</script>

<template>
  <Nav />
  <h2 v-if="cancion.nombre === 'Flowers' || cancion.nombre === 'Wrecking ball' || cancion.nombre === 'The Climb'">MILEY CYRUS</h2>
  <h2 v-if="cancion.nombre === 'Talking to the moon' || cancion.nombre === 'Locked out of Heaven' || cancion.nombre === 'When I was your man'">BRUNO MARS</h2>
  <h2 v-if="cancion.nombre === 'Te felicito' || cancion.nombre === 'Lalala' || cancion.nombre === 'Loba'">SHAKIRA</h2>
  <h2 v-if="cancion.nombre === 'Watermelon Sugar' || cancion.nombre === 'As it was' || cancion.nombre === 'Sign of the times'">HARRY STYLES</h2>
 

  <div class="tercio">
    <section class="cancion">
      <DatosCancion :cancion="cancion" />
      <!-- si es cancion id  mostrar este -->
    </section>
    <section class="reproducir_Spotify">
    <!-- Miley Cyrus -->
      <!-- FLOWERS -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0yLdNVWF3Srea0uzk55zFn?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Flowers'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0yLdNVWF3Srea0uzk55zFn?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Flowers'"></iframe> -->

      <!-- WRECKING BALL -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2vwlzO0Qp8kfEtzTsCXfyE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        v-show="cancion.nombre === 'Wrecking ball'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2vwlzO0Qp8kfEtzTsCXfyE?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Wrecking ball'"> 
        </iframe>-->

      <!-- THE CLIMB -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5x5JM1BSB6vollcIzDocqT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'The Climb'">
        </iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5x5JM1BSB6vollcIzDocqT?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'The Climb'">
        </iframe> -->


    <!-- Bruno Mars -->
      <!-- TALKING TO THE MOON -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/161DnLWsx1i3u1JT05lzqU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Talking to the moon'">
        </iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/161DnLWsx1i3u1JT05lzqU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Talking to the moon'"></iframe> -->

      <!-- LOCKED OUT OF HEAVEN -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3w3y8KPTfNeOKPiqUTakBh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Locked out of Heaven'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3w3y8KPTfNeOKPiqUTakBh?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Locked out of Heaven'"></iframe> -->

      <!-- WHEN I WAS YOUR MAN -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0nJW01T7XtvILxQgC5J7Wh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'When I was your man'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0nJW01T7XtvILxQgC5J7Wh?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'When I was your man'"></iframe> -->


    <!-- Shakira -->
      <!-- TE FELICITO -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2rurDawMfoKP4uHyb2kJBt?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Te felicito'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2rurDawMfoKP4uHyb2kJBt?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Te felicito'"></iframe> -->

      <!-- LALALA -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6i2kn3iS5WKzsaYBdeHLIQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Lalala'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6i2kn3iS5WKzsaYBdeHLIQ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Lalala'"></iframe> -->

      <!-- LOBA -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/30XvfCUPHSK2rzxmPlJGFf?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Loba'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/30XvfCUPHSK2rzxmPlJGFf?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Loba'"></iframe> -->
    
    <!-- Harry Styles -->
      <!-- WATERMELON SUGAR -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6UelLqGlWMcVH1E5c4H7lY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Watermelon Sugar'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6UelLqGlWMcVH1E5c4H7lY?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Watermelon Sugar'"></iframe> -->

      <!-- AS IT WAS -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'As it was'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'As it was'"></iframe> -->

      <!-- SIGN OF THE TIMES -->
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5Ohxk2dO5COHF1krpoPigN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Sign of the times'"></iframe>

        <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5Ohxk2dO5COHF1krpoPigN?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        v-show="cancion.nombre === 'Sign of the times'"></iframe> -->

    </section>
  </div>

  <Volver />
</template>

<style>
.tercio {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}

.reproducir_Spotify {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>