<template>
  <section ref="loaderSection">
    <div class="loader" v-if="isShow === true">
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
      <span style="--i:4;"></span>
      <span style="--i:5;"></span>
      <span style="--i:6;"></span>
      <span style="--i:7;"></span>
      <span style="--i:8;"></span>
      <span style="--i:9;"></span>
      <span style="--i:10;"></span>
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:13;"></span>
      <span style="--i:14;"></span>
      <span style="--i:15;"></span>
      <span style="--i:16;"></span>
      <span style="--i:17;"></span>
      <span style="--i:18;"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
    </div>
  </section>
</template>
<script>
export default {
  name : 'Loader',
  props:{
    isShow:{type:Boolean, default: true}
  },
  methods:{
    initStyle(){
      let myEl = this.$refs.loaderSection;
      let parentEl = myEl.parentElement;

      myEl.style.position = 'absolute';
      myEl.style.top = `${parentEl.offsetTop}px`;
      myEl.style.width = `${parentEl.offsetWidth}px`;
      myEl.style.height = `${parentEl.offsetHeight}px`;
      // this.$forceUpdate();
    },
  },
  watch:{
    isShow(newVal){
      if(newVal){
        // this.$refs.loaderSection.style
      }
    },
  },
  mounted(){
    this.initStyle();
  }
}
</script>
<style lang="scss" scoped>

  section{
    display: flex;
    justify-content: center;
    align-items: center;
    // min-height: 1000px;
    background: inherit;
    animation: animateBg 5s linear infinite;
    z-index: 2000;

    @keyframes animateBg {
      0%{
        filter: hue-rotate(0deg);
      }
      100%{
        filter: hue-rotate(360deg);
      }
    }

    .loader{
      position: relative;
      // ! 버그 유발 width: 120px;
      top: 0;
      left: 0;
      height: 120px;
      display: inline-flex;

      span{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotate(calc(18deg * var(--i)));
        
        // @for $i from 1 to 20{
        //   &:nth-of-type(#{$i}){
        //     transform: rotate(calc(18deg * #{$i}));
        //   }
        // }
        

        &::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #00ff0a;
          box-shadow: 0 0 10px #00ff0a;
          animation: animate 2s linear infinite;
          animation-delay: calc(0.1s * var(--i));

          @keyframes animate {
            0%{
              transform: scale(0);
            }
            66%, 100%{
              transform: scale(1);
              box-shadow: 
                      0 0 20px #00ff0a,
                      0 0 40px #00ff0a,
                      0 0 80px #00ff0a;
            }
          }
        }
      }
    }
    
  }
</style>