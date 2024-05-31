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
  <div class="container mt-3 main-color">
    <h2 v-if="store.topRated == true && store.type == 'top_rated'">Top Rated:</h2>
    <h2 v-else-if="store.topRated == true && store.type == 'popular'">Popular:</h2>
    <h2 v-else-if="store.topRated == true && store.type == 'now_playing'">Live:</h2>
    <h2 v-else="store.topRated == false">La Tua Ricerca:</h2>
  </div>
  <div class="sx" @click="store.previousPage()"><i class="fa-solid fa-chevron-left fa-3x"
      :class="{ grey: store.numberPage == 1 }"></i></div>
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

h2 {
  font-weight: 650;
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

/* AGGIUNGO LA CLASSE GRAY SE SONO NELLA 1' PAGINA */
.grey {
  color: grey;
}
</style>
