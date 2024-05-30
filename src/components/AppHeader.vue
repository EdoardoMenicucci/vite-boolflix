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
        <div class="logo main-color">
          BOOLFLIX
        </div>
        <div class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            v-model="store.modelUser">
          <button class="btn btn-danger" type="submit" @click="store.getData">Search</button>
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
  background-color: #3c3d40;
}

.logo {
  /* color: #E50914; */
  font-size: 3rem;
  font-weight: 700;
}

.btn {
  background-color: #E50914 !important;
}
</style>
