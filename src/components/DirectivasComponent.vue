<template>
    <div>
        <h1>Ejemplo Directivas</h1>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>
        <label>Añadir serie</label>
        <input type="text" v-model="serieNueva">
        <button @click="nuevaSerie()">Añadir</button><br>
        <hr>
        <label>Introduzca un número</label>
        <input type="number" v-model="numero"/>
        <h3 v-if="numero > 0" style="color: green">Positivo</h3>
        <h3 v-else-if="numero < 0" style="color:red">NEGATIVO</h3>
        <h3 v-else style="color:blue">0</h3>
        <hr>
           <h3>{{$data}}</h3>
    </div>
</template>

<script>
    export default{
        name: "DirectivasComponent",
        data(){
            return{
                series: ["The Boys", "Stranger Things", "Futurama"],
                numero: 0,
                nombre: "Alumno",
                serieNueva: ""
            }
        },
        methods: {
            nuevaSerie(){
                this.series.push(this.serieNueva)
                this.serieNueva = ""
            }
        }
    }
</script>