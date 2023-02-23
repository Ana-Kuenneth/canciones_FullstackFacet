const routes= [
    {
        name: "ListaArtistas",
        path: "/",
        component: () => import("./components/ListaArtistas.vue"), 
    },

    {
        name: "Artista",
        path: "/artist/:id",
        component: () => import("./pages/Artista.vue"), 
    },
    {
        name: "Cancion", 
        path: "/artist/:id/cancion/:id",
        component: () => import("./pages/Cancion.vue"), 
    },
    
]

export default routes;