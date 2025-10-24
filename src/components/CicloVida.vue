<template>
    <div>
        <h1>Ciclo de Vida y métodos VUE</h1>
        <h2 style="color:white">{{mensaje}}</h2>
        <button @click="cambiarMensaje()">Mostrar Mensaje</button>
    </div>
</template>

<script>
    export default{
        name: "CicloVida",
        data(){
            return{
                mensaje: "Hoy es viernes!!!"
            }
        },
        methods:{
            cambiarMensaje(){
                //PARA ACCEDER A LAS VARIABLES DE data() del component
                //Debemos utilizar la palabra this
                this.mensaje = "Hoy se sale!!!"
            },
        },
          mounted(){
                console.log("Component mounted")
            },
            created(){
                console.log("Component created")
            },
            updated(){
                console.log("Component updated")
            },
            unmounted(){
                console.log("Component unmounted")
            }
    }
</script>