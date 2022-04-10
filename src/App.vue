<template>
 <a-layout>

  <a-layout-sider>
    <SidebarComp />
  </a-layout-sider>

    <a-layout>

      <a-layout-header>
        <HeaderComp />
      </a-layout-header>

        <a-layout-content>
        <MainComp />
        </a-layout-content>

      <a-layout-footer>
        <FooterComp />  
      </a-layout-footer>
      
    </a-layout>

</a-layout>
    
</template>

<script>
import 'ant-design-vue/dist/antd.css'
import SidebarComp from './layout/SidebarComp.vue'
import HeaderComp from './layout/HeaderComp.vue'
import MainComp from './layout/MainComp.vue'
import FooterComp from './layout/FooterComp.vue'

export default {
  
  name: 'App',
  setup() {
    console.log('시작!');
  },
  components: {
    SidebarComp,
    HeaderComp, 
    MainComp, 
    FooterComp,
  }  
}
</script>
<style>
*{ box-sizing: border-box; }
html::-webkit-scrollbar, body::-webkit-scrollbar{
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.header, .main, .footer{
  width: 100%;
  margin: 0;
}
ul{
    list-style: none !important;
    padding-left: 0;
    margin-bottom: 0;
}
li{ text-align: left; }
a{ 
  text-decoration: none;
  color: #000;  
}
.ant-layout{
  height: 100vh;
}

.ant-layout-content{
  height: calc( 100vh - 64px );
  overflow: scroll;
}

.ant-layout-footer{ padding:0; }

</style>
