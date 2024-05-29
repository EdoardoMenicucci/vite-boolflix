<!-- GRANDE CONTENITORE IN CUI VERRANNO INSERITI UNO AD UNO TUTTTI I COMPONENTI -->
<script>
// COME IMPORTARE COMPONENTI IMPORT - NOME - FROM - PERCORSO
import AppHeader from './components/AppHeader.vue';
import store from '../data/Store.js'
import AppBody from './components/AppBody.vue';

// SCRIPT
export default {
  // QUA DICHIARO I COMPONENTI IMPORTATI
  components: {
    // ESEMPIO DI INPORT COMPONENTE
    AppHeader,
    AppBody,
  },
  data() {
    return {
      store,

    }
  },
  methods: {
    debug() {
      // console.log(this.store.names); //metodo per reactive corretto
      console.log(this.store.filmsDetails);
      console.log(this.store.stableSearch);
    },
  },
  mounted() {

    this.store.getData();
    this.debug();
  },
}
</script>

<template>
  <!-- TEMPLATE html-->
  <AppHeader />
  <AppBody />
</template>

<style>
/* STILE */
</style>
