<template>
    <div>
        <h1>Métodos Filters</h1>
        <label>Números y Doble: </label>
        <ul>
            <li v-for="numero in numeros" :key="numero">
                Número: {{numero}} | Doble: {{$filters.dobleNumero(numero)}}
                
            </li>
        </ul>
        <hr>
        <label>Palabras a Mayúscula: </label>
        <ul>
            <li v-for="pal in palabras" :key="pal">
                {{$filters.mayuscula(pal)}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: "MetodosFilters",
        data(){
            return{
                palabras: ["Hola", "Adios", "Como Estas", "Bueno"],
                numeros: [23,64,91,22,12,4]
            }
        }
    }
</script>