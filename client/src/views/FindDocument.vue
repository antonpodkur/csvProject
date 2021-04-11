<template>
  <div id="find-document">
   <h1>Find Page</h1>
   <div class="search-panel">
     <!-- <label>Text
       <input type="text" id="str" ref="str" v-model="str"/>
     </label> -->
     <input type="text" id="str" ref="str" v-model="str"/>
     <button @click="Find()">Sumbit</button>
     <!-- <p>{{this.answers}}</p> -->
     <!-- <div v-for="answer in answersObjs" :key="answer.index">
       <p>{{answer.data}}</p>
     </div> -->
   </div>
      <div class="data-table">
       <table>
        <tbody>
          <tr v-for="answer in answersObjs" :key="answer.index">
            <td v-for="(item,i) in answer.data" :key="i">
              {{item}}
            </td>
          </tr>
        </tbody>
      </table>
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
        answers: '',
        answersObjs: []
    }
  },
  methods: {
    Find(){
        // axios.get('http://localhost:5002/api/find')
        // .then(function (response) {
        //     this.result = response.data;
        //     // console.log(this.result[0].data);
        // }.bind(this));
        const parseField = (str) => {
          str = str.slice(1, str.length-1).split(',');
          return str;
        }


        this.answers = this.result[1].data.filter(item => item.toLowerCase().includes(this.str))
        this.answersObjs = this.answers.map(element => ({index: this.answers.indexOf(element), data: parseField(element)}));
        console.log(this.answersObjs);
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

.search-panel {
  display: flex;
  justify-content: center;
}

.search-panel input {
  /* border-radius: 5px; */

  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */
}

.data-table {
  display:flex;
  justify-content: center;
}

.data-table table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.data-table table th tr {
  background-color: #009879;
  color: white;
  text-align: left;
  font-weight: bold;
}

.data-table table th, .data-table table td {
  padding: 12px 15px;
}

.data-table table tbody tr {
  bottom: 1px solid #dddddd;
  text-align: left;
}

.data-table table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.data-table table tbody tr:last-of-type(even) {
  border-bottom:2px solid #009879;
}

.data-table table tbody tr.active-row{
  font-weight: bold;
  color: #009879;
}

</style>
