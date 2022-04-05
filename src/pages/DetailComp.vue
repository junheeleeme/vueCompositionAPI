<template>
    <div class="detail-post-wrap">
        <div class="detail-post-title">
            <h2>{{post.title}}</h2>
        </div>
        <div class="detail-post-body">
            {{post.body}}
        </div>
         <button class="goback" @click="$router.push('/')">
                Go to List
        </button>
    </div>
</template>
<script>
export default {
    name : 'DetailComp',
    data(){
        return{
            id : this.$route.params.id,
            post : {}
        }
    },
    created(){
        this.$axios('https://jsonplaceholder.typicode.com/posts/'+this.id).then(res => {
            if(res.status === 200){
                this.post = res.data;
            }else{
                console.log(res);
            }
        }).catch(err => console.log(err));
    },

}
</script>
<style>
.detail-post-title>h2{
    font-size: 1.5rem;
    text-align: left;
    padding: 0.4rem;
}
.detail-post-body{
    font-size: 1.1rem;
    line-height: 1.15;
    text-align: left;
    padding: 0.5rem 0;
}
.goback{
    width: 100%;
    border: none;
    font-size: 1.15rem;
    padding: 0.4em 0;
    background: #C3E5AE;
    color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
}
</style>