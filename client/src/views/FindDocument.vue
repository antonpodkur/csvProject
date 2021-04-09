<template>
  <div id="find-document">
   <h1>Find Page</h1>
   <div class="container">
     <label>Text
       <input type="text" id="str" ref="str" v-model="str"/>
     </label>
     <button @click="Find()">Sumbit</button>
     <p>{{this.answer}}</p>
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
        result: null,
        answer: ''
    }
  },
  methods: {
    Find(){
        axios.get('http://localhost:5002/api/find')
        .then(function (response) {
            this.result = response.data;
            // console.log(this.result[0].data);
        }.bind(this));

        this.answer = this.result[0].data.filter(item => item.toLowerCase().includes(this.str))
    }
  },
  created() {
      axios.get('http://localhost:5002/api/find')
        .then(function (response) {
            this.result = response.data;
            console.log(this.result);
        }.bind(this));
  }
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
