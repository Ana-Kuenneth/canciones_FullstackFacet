<script>
export default {
    data() {
        return {
            cancion1: {
                nombre: 'Flowers',
                album: 'Endless Summer Vacation',
                id: 11,
                imagen: 'https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d',
                duracion: '3:21',
            },

        }
    },
    props: ["cancion"]
}
</script>

<template>
    <div class="card-text-center" style="width: 18rem;">
        <img :src="cancion?.imagen" alt="" class="imagen">
        <h5 class="card-text-info">Nombre: {{ cancion?.nombre }}</h5>
        <h5 class="card-text-info">Duración: {{ cancion?.duracion }}</h5>
        <h5 class="card-text-info">Álbum: {{ cancion?.album }}</h5>
    </div>
</template>

<style>
h5 {
    margin: 10px;
}

.card-text-center {
    background-color: #6c757d;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    padding: 20px;

}

.card-text-info {
    font-size: 1em;
    font-family: var(--bs-body-font-family);
    color: white;
}

.card-text-center:hover {
    /* color: #212529; */
    /* text-shadow: 3px 4px 7px rgba(91, 90, 85, 0.883); */
    transform: scale(1.04);
    transition-timing-function: ease;
    transition-duration: 0.9s;

}
.imagen{
    width: 100%;
}
</style>