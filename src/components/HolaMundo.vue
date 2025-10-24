<template>

    <div>
        <h1>Mi primer Vue un Viernes, que ilusión</h1>
        <img src="./../assets/images/frameworks.webp" alt="">
        <h2>Bienvenido {{nombre}}</h2>
        <h3>Su Edad es {{edad}}</h3>
    </div>
    
</template>

<script>
    export default  {
        name: "HolaMundo",
        data() {
            return{
                nombre: "VUE",
                edad: 25,
                miArray: [],
                objeto: {}
            }
        }
    }
</script>

<style>

    h1{
        color: "blue"
    }

    @import './../assets/css/miprimerestilo.css';

</style>