<!-- COMPONENTE SINGOLO -->
<script>
import store from '../../data/Store.js'
// SCRIPT
export default {
  components: {
  },
  data() {
    return {
      store,
    }
  },
  methods: {

    getData() {
      let userSearch = this.store.modelUser
      let userSearchPhp = userSearch.split(' ').join('%20')
      this.store.stableSearch = userSearchPhp
      // console.log(this.store.stableSearch);

      // OPZIONE NECESSARIA PER AVER ACCESSO AL SERVER
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie?query=' + this.store.stableSearch + '&include_adult=false&language=it-IT&page=1',
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

  },
}
</script>

<template>
  <!-- TEMPLATE html-->
  <div class="headercolor">
    <div class="container">
      <header class="d-flex justify-content-between align-items-center">
        <div class="red">
          BOOLFLIX
        </div>
        <div class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            v-model="store.modelUser">
          <button class="btn btn-danger" type="submit" @click="getData()">Search</button>
        </div>
      </header>
    </div>
  </div>
</template>

<!-- CON SCOPED DICHIARO CSS SOLO AL ATTUALE COMPONENTE/file -->
<style scoped>
/* STILE */
header {
  height: 7rem;
}

.headercolor {
  background-color: grey;
}

.red {
  color: rgb(135, 0, 0);
  font-size: 3rem;
  font-weight: 700;
}
</style>
