<template>
    
    <main class="main">
        <router-view />
    </main>

</template>
<script>
export default {
    name : 'MainComp',

}
</script>
<style>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 110px);
    padding: 1rem;
    background: #fcfcfc;
    font-size: 2rem;
}
</style>