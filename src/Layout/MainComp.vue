<template>
    
    <main class="main">
        <router-view :key="$route.fullPath" />
    </main>

</template>
<script>
export default {
    name : 'MainComp',
}
</script>
<style>
.main{
    min-height: calc(100vh - 110px);
    padding: 1rem;
    background: #fcfcfc;
    font-size: 2rem;
}
</style>