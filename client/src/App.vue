<template>
  <div id="app">
    <AddDocument/>
  </div>
</template>

<script>
import AddDocument from './components/AddDocument';

export default {
  name: 'App',
  components: {
    AddDocument,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
