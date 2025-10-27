<template>
  <div>
    <h1>Bienvenido a Par o Impar</h1>
    <label for="">Número: </label>
    <input type="number" v-model="numero" />
    <button @click="numRandom()">Generar Número</button><br />
    <!-- <button @click="parOimpar()">Par o Impar ?</button> -->
    <h3 v-if="numero == 0"></h3>
    <h3 v-else-if="numero % 2 == 0" style="color: darkgreen">EL NÚMERO ES PAR</h3>
    <h3 v-else style="color: red">EL NÚMERO ES IMPAR</h3>
  </div>
</template>


<script>
export default {
  name: "ParImpar",
  data() {
    return {
      numero: 0,
      res: ""
    };
  },
  methods: {
    numRandom() {
        console.log("Generando Número")
      this.numero = parseInt(Math.random() * 100 + 1);
    },
    parOimpar() {
      if (this.numero % 2 == 0) {
        this.res = "par"
      } else {
        this.res = "impar";
      }
    },
  },
};
</script>
