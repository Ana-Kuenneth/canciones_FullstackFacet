<script>

export default {
    data() {
        return {
            // artista1: {
            //     cancion1: 'Flowers',
            //     cancion2: 'Wrecking ball',
            //     cancion3: 'The climb',
            // },

            cancion1: {
                nombre: '',
                duracion: '',
                album: '',
                imagen: '',
            },
            cancion2: {
                nombre: '',
                duracion: '',
                album: '',
                imagen: '',
            },
            cancion3: {
                nombre: '',
                duracion: '',
                album: '',
                imagen: '',
            },

            // id: ''
        }

    },

    props: ["canciones"],
    // created() {
    //     this.id = canciones?.id
    // },
}
</script>
 
<template>
    <router-link :to="{ name: 'Cancion', params: { id: cancion?.id } }" class="card" id="tarjetaAnimada"
        v-for="cancion in canciones">
        <div class="card-body">
            <p class="card-text">"{{ cancion?.nombre }}"</p>
        </div>
    </router-link>

</template>

<style>
.card {
    margin: 10px;
    height: 50px;
    width: 300px;
    padding: 0;
    align-content: center;
    margin: 30px;

    border-radius: 6%;
    border-color: #343a40;
    background-color: #343a40;
    /* background-color: #e7e6ec; */
}

.card-text {
    font-size: 1.5em;
    font-family: var(--bs-body-font-family);
    color: white;
    padding-top: 0px;
}
</style>