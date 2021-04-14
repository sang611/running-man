<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from './components/Wrapper.vue'

export default {
  name: 'App',
  components: {
    Wrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1 {
  font-size: 24px;
  font-weight: 700 !important;
}




.primary-color {
  color: #ED9B33;
}

.primary-button {
  background-color: #ED9B33 !important;
  border: none !important;
  outline: none !important;
  transition: .5s;
}

.primary-button:hover {
  background-color: #ffbf00 !important;
}
</style>
