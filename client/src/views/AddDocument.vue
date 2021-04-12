<template>
  <div>
    <Header></Header>
    <div id="add-document">
      <h1>Upload page</h1>
      <div class="container">
        <label>File
          <input type="file" id="file" ref="file" @change="handleFileUpload()"/>
        </label>
        <button @click="sumbitFile()">Sumbit</button>
      </div>
      </div>
      </div>
</template>

<script>
import axios from 'axios';

import Header from "../components/Header";

export default {
  name: 'AddDocument',
  components: {
    Header,
  },
  data(){
    return {
      file: '',
    }
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    sumbitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post('http://localhost:5002/api/document',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(()=> {
          console.log('success');
        }).catch((e)=>{
          console.log('failure');
          console.log(e.message);
        })
    }
  }
}
</script>

<style scoped>
#add-document {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
