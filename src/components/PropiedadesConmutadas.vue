<template>
  <div>
    <h1>Propiedad Conmutada</h1>
    <ul>
      <li v-for="juego in juegosRojos" :key="juego" v-html="juego"></li>
    </ul>
    <input type="number" v-model="numero">
    <span v-html="evaluarNumero"></span>
  </div>
</template>

<script>
export default {
  name: "PropiedadesConmutadas",
  computed: {
    //Se esribe como un metodo pero se utiliza como una propiedad
    evaluarNumero() {
        let data = ""
        if(this.numero % 2 == 0){
            data = "<h4 style='color:darkgreen'>PAR: " + this.numero + "</h4>"
        }else{
            data = "<h4 style='color:darkred'>IMPAR: " + this.numero + "</h4>"
        }
        return data
    },
    juegosRojos() {
      var datos = this.juegos;
      var i = 0;
      for (const juego of datos) {
        var juegoRojo = "<span style='color:red'>" + juego + "</span>";
        datos[i] = juegoRojo;
        i++;
      }
      return datos;
    },
  },
  data() {
    return {
      numero: 0,
      juegos: ["Parchis", "Canicas", "Luz Verde", "La Galleta"],
    };
  },
};
</script>