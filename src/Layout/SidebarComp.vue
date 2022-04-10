<template>
    
    <div class="logo">
        <h1>
            <router-link to='/'>Vue.js 3.0</router-link>
        </h1>
    </div>    

    <nav class="nav">
        <ul class="navList">
            
            <li class="navItem" v-for="menu in menuList" :key="menu.id">
                <router-link :to="menu.path">
                    {{menu.name}}
                </router-link>
            </li>

        </ul>
    </nav>    
</template>
<script>
import { ref } from 'vue' 
import { menu } from '../router/index'

export default {
    name : "SidebarComp",
    setup(){
        const menuList = ref(menu)
        return {
            menuList
        }
    }
}
</script>
<style>
.ant-layout-sider-children{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
}

.logo{ 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 64px;
    padding: 0 1rem;
}
.logo>h1{ margin: 0; }

.logo a{
    position: relative;
    top: 0px;
    font-size: 1.4rem;
    text-decoration: none !important;
    color: #fff;
}
.logo a.router-link-active::after{
    content: none;
}

.navItem>a{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    color: white;
}

.router-link-exact-active{
    font-weight: bold;
    text-decoration: underline !important;
    text-underline-offset: 4px;
}

</style>