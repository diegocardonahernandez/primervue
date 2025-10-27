import {createRouter, createWebHistory} from "vue-router"
import HomeComponent from './HomeComponent.vue'
import CineComponent from './CineComponent.vue'
import MusicaComponent from './MusicaComponent.vue'
import CicloVida from './CicloVida.vue'
import DirectivasComponent from './DirectivasComponent.vue'
import ParImpar from './ParImpar.vue'
import PropiedadesConmutadas from './PropiedadesConmutadas.vue'
import MetodosFilter from './MetodosFilters.vue'

//NECESITAMOS UN ARRAY CON LAS RUTAS A NAVEGAR

const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/musica", component: MusicaComponent},
    {path: "/cine", component: CineComponent},
    {path: "/ciclovida", component: CicloVida},
    {path: "/directivas", component: DirectivasComponent},
    {path: "/parimpar", component: ParImpar},
    {path: "/propiedadesconmutadas", component: PropiedadesConmutadas},
    {path: "/filters", component: MetodosFilter}
]

// CREAMOS UNA VARIABLE PARA EL ROUTER INDICANDO EL TIPO DE NAVGEACIÓN Y LAS RUTAS

    const router = createRouter({
        history: createWebHistory(),
        routes: myRoutes
    })

    //LA CONSTANTE ROUTER ES LA QUE UTILIZARÁ EL FOCHERO main.js

export default router;