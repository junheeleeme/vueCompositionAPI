<template>
    <HeaderComp />
    <MainComp />
    <FooterComp />
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured,
        onMounted, onUnmounted, onUpdated } from "vue";
import HeaderComp from './layout/HeaderComp.vue'
import MainComp from './layout/MainComp.vue'
import FooterComp from './layout/FooterComp.vue'

export default {

  
  name: 'App',
  setup() {
    console.log('시작!');
    onBeforeMount(()=>{
      console.log('BeforeMount!');
    });
    onBeforeUnmount(()=> {
      console.log('BeforeUnMount!');
    })
    onBeforeUpdate(()=> {
      console.log('BeforeUpdate!');
    });
    onErrorCaptured(()=> {
      console.log('ErrorCaptured!');
    })
    onMounted(()=> {
      console.log('onMounted!');
    })
    onUnmounted(()=> {
      console.log('onUnmounted!');
    })
    onUpdated(()=> {
      console.log('onUpdated!');
    })
  },
  data(){
    return {
      title : '뷰는...',
      isActive : false,
    }
  },
  components: {
    HeaderComp, MainComp, FooterComp
  },
  methods : {
    toggle(){
      this.isActive = !this.isActive;
    }
  }
  
}
</script>
<style>
*{
  margin: 0 auto;
  box-sizing: border-box;
}
html::-webkit-scrollbar, body::-webkit-scrollbar{
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 770px;
  color: #2c3e50;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.header, .main, .footer{
  width: 100%;
}
ul{
    list-style: none;
    padding-left: 0;
}
li{ text-align: left; }
a{ 
  text-decoration: none;
  color: #000;  
}
</style>
