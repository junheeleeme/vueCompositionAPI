<template>        

        <div>
            123
        </div>

        <div class="store-wrap">
            Store : {{$store.state.count}}
        </div>

</template>
<script>

export default {
    name : 'HeaderComp',
    setup(){
        
    }
}

</script>
<style>
.ant-layout-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
}
.header-wrap{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    color: #fff;
    font-size: 1.5rem;
    width: 100px;
}

</style>