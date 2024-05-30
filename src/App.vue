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
    // debug() {
    // },
  },
  mounted() {
    this.store.phpRequestTop();
    // this.debug();
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
