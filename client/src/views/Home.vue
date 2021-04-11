<template>
  <div>
    <Header></Header>
    <div id="home">
      <h1>Home Page</h1>
      <h5>Some text here</h5>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: 'Home',
  components: {
    Header,
  },
}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
