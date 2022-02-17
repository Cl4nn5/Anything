<template>
  <!-- <Loader :isShow="true" /> -->
  <top-menu :userInfo="userInfo"></top-menu>
  <div>
    <input type="text" placeholder="당신은 누구십니까?" v-model="userInfo.name"/>
  </div>
  <main class="mainGrid">
    <!--  
      a   b
      c   d
    -->
    <Loader :isShow="true" />
    <div>검색</div>
    <div>정보</div>
    <div>목록1</div>
    <div>목록2</div>
  </main>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
</template>

<script>
// import VueRouter from 'vue-router'

// import HelloWorld from './components/HelloWorld.vue'
import TopMenu from './components/TopMenu.vue'
import Loader from './components/Loader.vue'

export default {
  name: 'CliApp',
  components: {
    // HelloWorld,
    TopMenu,
    Loader,
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
.mainGrid{
  display: grid;
  grid-template: 
  "panel1 panel2 "
  "panel3 panel4";
  
  @for $n from 1 through 4 {
    & > div:nth-of-type(#{$n}){
      padding: 1rem;
      text-align: center;
      grid-area: panel#{$n};
    }
  }
}
</style>
