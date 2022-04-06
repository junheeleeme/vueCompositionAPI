<template>
    <header class="header">
        
        <div class="logo">
            <h1>
                <router-link to='/'>Vue.js 3.0</router-link>
            </h1>
        </div>
        
        <nav class="nav">
            <ul class="nav-list">
                
                <li v-for="menu in menuList" :key="menu.id">
                    <router-link :to="menu.url">{{menu.title}}</router-link>
                </li>
            </ul>
        </nav>

        <div class="storeWrap">
            Counter : {{$store.state.count}}
        </div>
    </header>
</template>
<script>
import { ref } from 'vue'
import { menu } from '../menu'

export default {
    name : 'HeaderComp',
    setup(){
        const menuList = ref(menu);
        
        return { menuList }
    }
}
</script>
<style>
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px; 
    background: #ebebeb;
}
.logo{ 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 25%; height: 100%;
    padding-left: 1.5rem;
}
.logo>h1{ margin: 0; }

.logo a{
    position: relative;
    top: -3px;
    font-size: 1.3rem;
    text-decoration: none !important;
    color: #000;
}
.logo a.router-link-active::after{
    content: none;
}
.nav{
    display: block;
    width: 75%;
    height: 20px;
    margin: 0;
}
.nav-list{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    list-style: none;
}
.nav-list>li>a{
    position: relative;
    text-decoration: none;
    font-size: 1.1rem;
    color: #000;
}

.nav-list>li>a::after{
    content: '';
    display: inline-block;
    position: absolute;
    width: 0;
    transition: 0.4s ease;
}

a.router-link-active::after{
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -5px; left: -5%;
    width: 110% !important; height: 2px;
    background: #000;
}
.storeWrap{
    position: absolute;
    top: 50px; right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px; height: 50px;
    background: rgba(255, 0, 0, 0.836);
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
}

</style>