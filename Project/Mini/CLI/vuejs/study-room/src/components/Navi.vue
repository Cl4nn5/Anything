<template>
  <div class="navigation">
    <ul>
      <li
        class="list"
        :class="{active:item.isSelected === true}"
        v-for="(item, idx) in list"
        :key="idx"
        @click="selectItem(item, idx)">
        <a :href="'#'+idx">
          <div class="icon" v-html="item.icon">
          </div>
          <span class="text">{{item.text}}</span>
        </a>
      </li>
      <div class="indicator"></div>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'Navi',
  components:{
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    selectItem(item){
      this.list.forEach(el => el.isSelected = false);
      item.isSelected = true;
    }
  },
  created() {
    this.list = [
      {
        icon: '<ion-icon name="home-outline"></ion-icon>',
        text: 'Home',
        isSelected: true,
      },
      {
        icon: '<ion-icon name="person-outline"></ion-icon>',
        text: 'Profile',
        isSelected: false,
      },
      {
        icon: '<ion-icon name="chatbox-outline"></ion-icon>',
        text: 'Message',
        isSelected: false,
      },
      {
        icon: '<ion-icon name="camera-outline"></ion-icon>',
        text: 'Photos',
        isSelected: false,
      },
      {
        icon: '<ion-icon name="settings-outline"></ion-icon>',
        text: 'Setting',
        isSelected: false,
      },
    ]
  },
};
</script>
<style lang="scss" scoped>
  // var
  $liLength: 5;
  $clr: #000000;
  $menuColor: #74c0fc;
  $indicatorLeft: 7.5%;
  
  .navigation{
    background-color: $menuColor;
    position: relative;
    width: 100%;
    height: 5vh;
    // height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    
    ul{
      display: flex;
      // justify-content: space-around;
      width: 100%;
      height: inherit;

      li{
        position: relative;
        width: 100%/$liLength;
        height: 3.5rem;
        z-index: 1;

        a{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          text-align: center;
          font-weight: 500;
          color: #000000;
          text-decoration: none;
        }

        a{
          .icon{
            position: relative;
            display: block;
            line-height: 2.5rem;
            font-size: 1.5em;
            text-align: center;
            transition: 0.5s;
            color: $clr;
          }
        }

        &.active a .icon{
          transform: translateY(-2rem);
        }

        a{
          .text{
            position: absolute;
            color: #000000;
            font-weight: 400;
            font-size: 0.75em;
            letter-spacing: 0.05em;
            opacity: 0;
            transition: 0.5s;
          }
        }

        &.active a .text{
          opacity: 1;
          // transform: translateY(1.5rem);
        }
      
      @for $i from 0 through 4 {
        &:nth-child(#{$i+1}).active ~ .indicator{
          left: $indicatorLeft + (20% * $i)
        }
      }
      
        // &:nth-child(1).active ~ .indicator{
        //   left: $indicatorLeft + 20%
        // }
        // &:nth-child(2).active ~ .indicator{
        //   transform: translateX(calc((70px * 1)));
        // }
      }
    }
  }

  .indicator{
    position: absolute;
    top: -2.75rem;
    left: $indicatorLeft;
    width: 3rem;
    height: 3rem;
    background-color: #29fd53;
    border-radius: 50%;
    border: 0.25rem solid var(--bodyColor);
    transition: 0.5s;

    &::before{
      content: '';
      position: absolute;
      top: 82.5%;
      left: -25.25%;
      width: 1.1rem;
      height: 0.75rem;
      background: $menuColor;
      // background: red;
      border-top-right-radius: 1rem;
      box-shadow: 0px -10px 0 0 var(--bodyColor);
    }

    &::after{
      content: '';
      position: absolute;
      top: 82.5%;
      right: -0.75rem;
      width: 1.1rem;
      height: 0.75rem;
      background: $menuColor;
      // background: red;
      border-top-left-radius: 1rem;
      box-shadow: 0px -10px 0 0 var(--bodyColor);
    }
  }
</style>