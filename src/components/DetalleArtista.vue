<script>
export default {
    data() {
        return {
            artista1: {
                nombre: 'Miley Cyrus',
                id: 1,
                paisOrigen: 'Estados Unidos',
                genero: 'Pop',
                descripcion: 'Miley Ray Cyrus, cuyo nombre original fue Destiny Hope Cyrus, es una cantante, compositora, actriz y productora discográfica estadounidense. Se destaca por su voz de tonalidad grave, su música abarca una amplia gama de estilos, desde pop y country pop hasta hip hop, experimental y rock.',
                imagen: 'https://es.web.img3.acsta.net/pictures/19/05/29/13/49/5504528.jpg',
                listaCanciones: [11, 12, 13],
            },

        }
    },
    props: ["artista"] 
}
</script>

<template>
    <div class="card-text-center" style="width: 18rem;">
        <img :src="artista.imagen" alt="">
        <h3 class="card-text-info">Nombre: {{ artista.nombre }}</h3>
        <h5 class="card-text-info">País de origen: {{ artista.paisOrigen }}</h5>
        <h5 class="card-text-info">Género musical: {{ artista.genero }}</h5>
        <h5 class="card-text-info">{{ artista.descripcion }}</h5>
    </div>
</template>

<style>
h5 {
    margin: 10px;
}

img{
    max-height: 200px;
    max-width: 100px;
}

.card-text-center {
    background-color: #6c757d;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;

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
</style>