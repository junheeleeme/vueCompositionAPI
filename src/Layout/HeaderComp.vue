<template>
    <header class="header">
        
        <div class="logo">
            <h1>
                <router-link to='/'>꾸생</router-link>
            </h1>
        </div>
        
        <nav class="nav">
            <ul class="nav-list">
                <li>
                    <router-link to='/'>Home</router-link>
                </li>
                <li>
                    <router-link to='/about'>About</router-link>
                </li>
                <li>
                    <router-link to='/portfolio'>Portfolio</router-link>
                </li>
                <li>
                    <router-link to='/contact'>Contact</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name : 'HeaderComp',

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
.logo{ width: 100px; }
.logo a{
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
    height: 25px;
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
    bottom: -5px; left: 0;
    width: 110% !important; height: 2px;
    background: #000;
}


</style>