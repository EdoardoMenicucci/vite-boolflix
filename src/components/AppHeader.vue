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
        <div class="red">
          BOOLFLIX
        </div>
        <div class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-danger" type="submit">Search</button>
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
