<template>
  <div>
    <Header></Header>
    <div id="find-document">
    <h1>Find Page</h1>

    <div class="search-panel" id="search-panel">
      <input type="text" id="str" ref="str" v-model="str"/>
      <button @click="Find()">Sumbit</button>
    </div>
    <div class="filters">
      <h2>Filters</h2>
      <label>name
        <input type="text" v-model="name">
      </label>
      <label>year
        <input type="text" v-model="year">
      </label>
      <label>month
        <input type="text" v-model="month">
      </label>
      <label>day
        <input type="text" v-model="day">
      </label>
      <button @click="Find()">Find</button>
    </div>
          <h2 class="table-name">{{element.name}}</h2>
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
  </div>
</template>

<script>
import axios from 'axios';

import Header from "../components/Header";


export default {
  name: 'FindDocument',
  components: {
    Header,
  },
  data(){
    return {
        str: '',
        result: null,
        answers: '',
        answersObjs: [],
        state: true,
        element: {},
        name: '',
        year: '',
        month: '',
        day: ''
    }
  },
  methods: {
    Find(){
        const parseField = (str) => {
          str = str.slice(1, str.length-1).split(',');
          return str;
        }
        console.log(this.name)
        if(this.name!==''){
          let tmp = this.result.filter(item => item.name === this.name);

          if(tmp.length === 1) this.element = tmp[0];
          else if(this.year==='' && this.month === '' && this.day ==='')
            {
              let biggestDate = Math.max.apply(null, tmp.map(e => new Date(e.uploaded_at)))
              this.element = tmp.filter(item => new Date(item.uploaded_at) === biggestDate)[0]
            }
        }

        this.answers = this.element.data.filter(item => item.toLowerCase().includes(this.str))
        this.answersObjs = this.answers.map(element => ({index: this.answers.indexOf(element), data: parseField(element)}));
        console.log(this.answersObjs);
    },

  },
  created() {
      axios.get('http://localhost:5002/api/find')
        .then(function (response) {
            this.result = response.data;
            console.log(this.result);
            this.element = this.result[this.result.length-1]
            console.log(this.element)
        }.bind(this));
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

.search-panel {
  display: flex;
  justify-content: center;
}

.search-panel input {
  /* border-radius: 5px; */

  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */
}

.table-name {
  margin-top: 25px;
  font-size: 1.5em;
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
  padding: 2px 2px;
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
  position: fixed;
  z-index: 1;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
</style>
