<template>
    <div>
        Contact
    </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core';
export default {
    name : 'ContactComp',
    methods : {
        getParams(){
            console.log(this.router);
        }
    },
    setup(){
        onMounted(()=> {
            this.getParams();
        })
    }
}
</script>
<style lang="">
    
</style>