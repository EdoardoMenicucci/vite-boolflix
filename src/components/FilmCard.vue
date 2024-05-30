<!-- COMPONENTE SINGOLO -->
<script>
import store from '../../data/Store.js'
// SCRIPT
export default {
  props: {
    film: Object,
    index: Number,
  },
  components: {
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
  <div class="box-film mb-5 p-3 position-relative">
    <div class="pb-1"><span class="text-heavy">Titolo: </span>{{ film.title }}</div>
    <div class="pb-1"><span class="text-heavy">Titolo originale: </span>{{ film.original_title }}</div>
    <!-- <div class="pb-1"><span class="text-heavy">Breve descrizione: </span>{{ film.overview.split(',')[0] }} -->
    <div class="pb-1"><span class="text-heavy">Breve descrizione: </span>{{ store.truncateText(film.overview, 50) }}
    </div>
    <div class="pb-1"><span class="text-heavy">Voto: </span>{{ film.vote_average.toFixed(1) }} / 10</div>
    <div class="d-flex">
      <div class="pb-1"><span class="text-heavy">Lingua originale: </span>
      </div>
      <div class="bandiera ms-2" :class="'fi-' + film.original_language"></div>
      <div class="ms-2">{{ film.original_language }}</div>
    </div>
    <!-- <div class="pb-2">{{ film.overview }}</div> -->
    <img class="position-absolute" :src="store.posterBase + film.poster_path" alt="">
  </div>
  <!-- <div class="box-film mb-5">

  </div> -->
</template>

<!-- CON SCOPED DICHIARO CSS SOLO AL ATTUALE COMPONENTE/file -->
<style scoped>
/* STILE */
.box-film {
  width: calc(100% / 4 - 6rem);
  height: 20rem;
  background-color: rgb(16, 16, 15);
  color: white;
  overflow: auto;
}

.text-heavy {
  font-weight: 700;
}

img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: opacity 0.4s ease
}

.box-film:hover img {
  opacity: 0;
}

.bandiera {
  height: 1.25rem;
  width: 1.6rem;
  background: contain;
  /* background-color: rgb(255, 255, 255); */
}
</style>
