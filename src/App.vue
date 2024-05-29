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
    //PER PRENDERE FILE DA ASSETS
    // getImg(path) {
    //   let risultato = new URL("../assets/img/" + path, import.meta.url);
    //   return risultato.href;
    // },
    debug() {
      console.log(this.store.names); //metodo per reactive corretto
      console.log(this.store.filmsDetails);
    },
    // QUA METODO PER COMUNICARE CON IL SERVER PHP E RECUPERARE DATI SEARCH
    getData() {
      // OPZIONE NECESSARIA PER AVER ACCESSO AL SERVER
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie?query=ritorno%20al%20futuro&include_adult=false&language=it-IT&page=1',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FmZDJhNDAxODc5ZWVhOGZjNjI1NWZkM2M4YmY3YiIsInN1YiI6IjY2NTcxZTU2MWE4ZjExZDYzM2Y4ZjdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xY2xUBVZ5Dda3gSmSCfG_Yld24zol4JJAwNNGA_OQKY'
        }
      };
      // CHIAMATA AXIOS
      axios
        .request(options)
        .then((response) => {
          // console.log(response.data.results);
          let risultato = response.data.results
          // this.store.filmsDetails.push(risultato)
          // console.log(this.store.filmsDetails);
          this.store.filmsDetails = risultato
        })
    }
  },
  mounted() {
    this.debug();
    this.getData();
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
