<template>
    <HeaderComp />
    <MainComp />
    <FooterComp />
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured,
        onMounted, onUnmounted, onUpdated } from "vue";
import HeaderComp from './Layout/HeaderComp.vue'
import MainComp from './Layout/MainComp.vue'
import FooterComp from './Layout/FooterComp.vue'

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header, .main, .footer{
  max-width: 770px;
}

</style>
