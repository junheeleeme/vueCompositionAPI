    <template lang="">
    <div>
        About
        <p>{{$store.state.count}}</p>
        <button @click="countUp">증가</button>
        <div>{{txt}}</div>
        <input type="text" ref="titleRef">


        <ChildComp/>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import ChildComp from '../components/ChildComp.vue'

export default {
    name : 'AboutComp',
    setup(){
        const txt = ref('hello world!');
        onMounted(()=> {
            txt.value = '123';
        })
        return { txt } 
    },
    components : {
        ChildComp
    }
}
</script>
<style >
    
</style>