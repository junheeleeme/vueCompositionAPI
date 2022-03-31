<template>
  <div class="wrap">
    <HeaderComp />
    <router-view />
    <h1>Vue.js</h1>
    <h2><span v-bind:class="isActive ? 'active' : ''">{{ title }}</span></h2>
    <button @click="toggle">토글 버튼</button>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured,
        onMounted, onUnmounted, onUpdated } from "vue";
import HeaderComp from './components/HeaderComp.vue'

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
    HeaderComp
  },
  methods : {
    toggle(){
      this.isActive = !this.isActive;
    }
  }
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.active{
  background: #000;

}

</style>
