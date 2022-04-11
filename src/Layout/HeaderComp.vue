<template>        

        <div>
            123
        </div>

        <div class="store-wrap">
            Store : {{count}}
        </div>

</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name : 'HeaderComp',
    setup(){
        const store = useStore();
        const count = computed(()=> store.state.count );
        
        return { count }
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