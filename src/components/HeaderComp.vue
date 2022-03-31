<template>
    <header>
        <nav class="nav-wrap">
            <ul class="nav-list-wrap">
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
                    <router-link to='/contact/123'>Contact</router-link>
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
.nav-list-wrap{
    padding-left: 0;
}
.nav-list-wrap>li{
    display: inline-flex;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background: #eee;
    margin-right: 1rem;
    font-weight: bold;
}


</style>