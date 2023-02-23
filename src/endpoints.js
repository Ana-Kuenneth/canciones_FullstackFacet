import axios from 'axios'

export default {
  getDefaultEndpoint(endpoint) {
    return axios.get(endpoint).then((info) => {
      return info.data
    })
  },
  getListaArtistas() {
    return axios.get(`http://localhost:4000/artistas`).then((artistas) => {
      return artistas.data
    });
  },
  getArtista(id) {
    return axios.get(`http://localhost:4000/artistas/${id}`).then((artista) => {
      return artista.data
    });
  },
  getListaCanciones() {
    return axios.get(`http://localhost:4000/canciones`).then((canciones) => {
      return canciones.data
    });
  },
  getCancion(id) {
    return axios.get(`http://localhost:4000/canciones/${id}`).then((cancion) => {
      return cancion.data
    });
  },
}