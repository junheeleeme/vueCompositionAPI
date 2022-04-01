<template>
    <footer class="footer">
        <p>{{ getDate()}}. All rights reserved</p>
    </footer>
</template>
<script>
export default {
    name : 'FooterComp',
    methods : {
        getDate(){
            const date = new Date();
            return date.getFullYear();
        }
    }
}
</script>
<style>
.footer{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    background: rgb(238, 238, 238);
}
.footer>p{
    font-size: 0.8rem;
    margin: 0;
    padding: 0 1rem;
}

</style>