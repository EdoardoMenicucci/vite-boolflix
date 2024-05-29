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
  <div class="box-film">
    <div>{{ film[0].title }}</div>
  </div>
</template>

<!-- CON SCOPED DICHIARO CSS SOLO AL ATTUALE COMPONENTE/file -->
<style scoped>
/* STILE */
.box-film {
  width: calc(100% / 4 - 6rem);
  height: 20rem;
  background-color: rgb(16, 16, 15);
  color: white;
}
</style>
