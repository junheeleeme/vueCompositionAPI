    <template lang="">
    <div>
        About
        <p>{{$store.state.count}}</p>
        <button @click="countUp">증가</button>
        <input type="text" ref="titleRef">
        <ChildComp />
    </div>
</template>
<script>
import ChildComp from '../components/ChildComp.vue'

export default {
    name : 'AboutComp',
    mounted(){
        console.log()
    },
    methods: {
        countUp(){
            this.$store.commit('increase', 1);
            console.dir(this.$refs.titleRef.value = 'This is Title Ref!')
        }
    },
    components : {
        ChildComp
    }
}
</script>
<style >
    
</style>