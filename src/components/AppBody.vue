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
  <div class="sx" @click="store.previousPage()"><i class="fa-solid fa-chevron-left fa-3x"></i></div>
  <div class="dx" @click="store.nextPage()"><i class="fa-solid fa-chevron-right fa-3x"></i></div>
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

.sx {
  position: fixed;
  height: 3rem;
  width: 2rem;
  /* background-color: aqua; */
  left: 5vw;
  top: 46vh;
}

.dx {
  position: fixed;
  height: 3rem;
  width: 2rem;
  /* background-color: aqua; */
  left: 95vw;
  top: 46vh;
}

i {
  color: #E50914;
}
</style>
