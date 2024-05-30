<!-- COMPONENTE SINGOLO -->
<script>
import store from '../../data/Store.js'
import FilmCard from './FilmCard.vue';
// SCRIPT
export default {
  components: {
    FilmCard,
  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<template>
  <!-- TEMPLATE html-->
  <div class="container d-flex flex-wrap justify-content-between">
    <FilmCard v-for="film, index in store.filmsDetails" :film="film" :index="index" />
  </div>
</template>

<!-- CON SCOPED DICHIARO CSS SOLO AL ATTUALE COMPONENTE/file -->
<style scoped>
/* STILE */
div {
  align-items: flex-start;
}
</style>
