import { createApp } from 'vue'
import App from './App.vue'
import router from './components/Router'

var app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$filters = {
    //Creamos dos métodos que recibiran algo y devolveran un resultado
    mayuscula(dato){
        return dato.toUpperCase()
    },
    dobleNumero(numero) {
        return numero *2
    }
}
