<template>
  <div id="find-document">
   <h1>Find Page</h1>
   <div class="container">
     <label>File
       <input type="text" id="str" ref="str" v-model="str"/>
     </label>
     <button @click="Find()">Sumbit</button>
   </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FindDocument',
  components: {
  },
  data(){
    return {
        str: '',
        result: null
    }
  },
  methods: {
    async Find(){
        // axios("http://localhost:5002/api/find").then(res => (this.result = res));
        const res = await axios('http://localhost:5002/api/find');
        this.result = res.data;
        console.log(this.result);
        axios("http://localhost:5002/api/find").then(res => console.log(res));
    }
  },
}
</script>

<style scoped>
#find-document {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
