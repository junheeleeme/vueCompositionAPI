<template>
    <h2 class="subTitle">Vuex - Store</h2>  
        
        <p>{{count}}</p>
        <button class="btn" @click="increase">Plus</button>
        <button class="btn" @click="decrease">Minus</button>

</template>
<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name : 'FetchComp',
    setup(){
        
        const store = useStore();
        const count = computed(()=> store.state.count );
        const increase = () => store.commit('increase', 1);        
        const decrease = () => store.commit('decrease', 1);

        return { count, increase, decrease } 
    },
}
</script>
<style >
.btn{
    background: rgb(77, 77, 77);
    color: #fff;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    margin: 0 0.5em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>