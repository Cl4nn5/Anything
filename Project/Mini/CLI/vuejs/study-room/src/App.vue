<template>
  <top-menu :userInfo="userInfo"></top-menu>
  <div>
    <input type="text" placeholder="당신은 누구십니까?" v-model="userInfo.name"/>
  </div>
  
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
</template>

<script>
// import VueRouter from 'vue-router'

// import HelloWorld from './components/HelloWorld.vue'
import TopMenu from './components/TopMenu.vue'

export default {
  name: 'CliApp',
  components: {
    // HelloWorld,
    TopMenu,
  },
  data(){
    return {
      isTest : false,
      userInfo: {
        idx: '1',
        grant: 'S',
        name : '',
        age : '',
      }
    }
  },
  created() {
    this.isTest = (this.userInfo.name.toUpperCase() === 'ADMIN') && true
  },
}
</script>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

// $bodycolor:#ffffff;
:root{
  --bodyColor: #ffffff;
}

html{
  font-size: 20px;
}
body, ul, li{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,li{
  padding: 0;
  list-style-type: none;
}
.userInfo{
  display: flex;
}
</style>
