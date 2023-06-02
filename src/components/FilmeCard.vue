<template>
  <q-card class="my-card bg-blue-grey-10 text-white">
    <img :src="`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`" />
    <q-card-section>
      <div class="text-h6">{{ filme.title }}</div>
      <q-separator class="q-mb-md" dark />
      <div class="text-subtitle2">{{ filme.overview }}</div>
    </q-card-section>

    <q-card-section>
      Estrelado por:
      <ul>
        <li v-for="ator in filme.actors" v-bind:key="ator">
          {{ ator.name }}
        </li>
      </ul>
    </q-card-section>
    <q-card-section>
      Diretor: {{ filme.director }}<br />
      Ano:
      {{ new Date(Date.parse(filme.release_date)).getFullYear() }}
    </q-card-section>
    <q-separator dark />

    <q-card-actions v-if="logado">
      <q-btn flat @click="locar()">Locar</q-btn>
      <q-btn flat @click="comprar()">Comprar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    filme: Object,
    diretor: String,
    atores: Object,
    logado: Boolean,
  },
  created() {
    console.log(
      "FilmeCard: " +
        JSON.stringify(this.filme) +
        ", Diretor: " +
        this.diretor +
        ", Atores: " +
        this.atores
    );
  },
  methods: {
    locar() {
      this.$emit("locarFilme", this.filme);
    },
    comprar() {
      this.$emit("comprarFilme", this.filme);
    },
  },
};
</script>

<style></style>
