<template>
  <div class="topMenu">
    <ul>
      <li>
        <!-- <img src="/src/assets/image/tempLogo.png" :alt="logoAlt"> -->
        <img class="logoImg" src="../assets/image/tempLogo.png" :alt="logoAlt">
      </li>
      <li>
        <Navi></Navi>
      </li>
      <li>{{!!userInfo?.name ? userInfo.name.toUpperCase() : '고객정보'}}</li>
    </ul>
  </div>
</template>

<script>
import Navi from './Navi.vue'

export default {
  name: 'TopMenu',
  components:{
    Navi
  },
  props:{
    type: {type : Boolean, default : false},
    userInfo : {type : Object}
  },
  data() {
    return {
      logoAlt: '나의 블로그 로고'
    }
  },
}
</script>

<style lang="scss" scoped>
  .topMenu{

    ul{
      margin-top: 1.5rem;
      display: flex;
      justify-content: space-evenly;

      li{
        text-align: center;

        &:first-child{ 
          flex: 1 1 15%;
          max-width: 12rem;
          height: 2rem;
          padding: 0 0.5rem;
          // animation: logoSlideIn 1s ease-in;
          animation-name: logoSlideIn;
          animation-duration: 1s;
          animation-timing-function: ease-in;
          animation-delay: 300ms;
        }
        &:nth-child(2){
          flex: 1 1 70%;
        }
        &:last-child{
          flex: 1 1 15%;
        }
        .logoImg{
          width: 100%;
          height: inherit;
        }
      }
    }
  }

  // animation
  @keyframes logoSlideIn {
    from{
      transform: scale(0);
      left: -100px;
      display: none;
    }
    66%{
      transform: scale(1.2);
      background-color: #ffd0b0;
    }
    to{
      transform: scale(1.0);
      display: none;
    }
  }
</style>