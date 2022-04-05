<template>

    <h2 class="subTitle">Home
        <button @click="change">Toggle</button>

    </h2>   
        <ul class="postWrap" v-if="show">
            <li class='postItem' v-for="post in posts" :key="post.id">
                <router-link class="postItem-wrap" :to="`/detail/${post.id}`" >
                    <div class="postThumb" />
                    <div class="postContent">
                        <h3 class='postTitle'>{{ post.title }}</h3>
                        <div class="postBody">
                            {{ post.body }}
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="postWrap" v-else>
            <li class='postItem' v-for="cnt in skeletonCnt" :key="cnt">
                <a class="postItem-wrap" href="#" >
                    <div class="postThumb skeleton" />
                    <div class="postContent">
                        <h3 class='postTitle skeleton' />
                        <div class="postBody skeleton" />
                    </div>
                    <div class="skeleton-bar" />
                </a>
            </li>
        </ul>
</template>
<script>
import { ref, watchEffect } from 'vue'
import axios from 'axios'

export default {
    name : 'HomeComp',
    setup()
    {
        const skeletonCnt = ref(5);
        const show = ref(false);
        const posts = ref([]);
        axios('https://jsonplaceholder.typicode.com/posts').then(res => {
            if(res.status === 200){
                posts.value = res.data;
            }else{
                console.log(res);
            }
        }).catch(err => console.log(err));

        watchEffect(()=> {
            console.log('watchEffect 실행')
            if(posts.value.length > 0){
                show.value = true;
            }
        })

        function change(){
            show.value = !show.value; 
        }

        return { skeletonCnt, posts, show, change }
    },
    watch:{
        posts(next){
            if(next.length>0) this.show = true;
        }
    }
}
</script>
<style>
.skeleton{
    background: #eee;
}
.subTitle{
    width: 100%;
    text-align: left;
    font-size: 1.5rem;
    padding: 0.5rem 0;
}
.postWrap{
    display: flex;
    flex-direction: column;
}
.postItem{
  width: 100%;
  margin: 0.4rem 0;
}
.postItem-wrap{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; height: 140px;
    margin: 0;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
}
.postItem-wrap:hover{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.postThumb{
    width: 180px;
    height: 100%;
    background: #eee;
    margin: 0;
}
.postContent{
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: center;
    width: calc(100% - 180px); height: 100%;
    padding: 0 0.5rem;
    margin: 0;
}
.postTitle{
    width: 100%;
    height: 30px;
    font-size: 1.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.postBody{
    font-size: 1.1rem;
    width: 100%;
    height: 65px;
    display: -webkit-box;
    text-overflow: ellipsis; 
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;
}
.skeleton-ui{
    width: 100%;
    height: 100%;
    background: #000;
}
.skeleton-bar{
    position: absolute;
    top: 0; left: -100px;
    width: 40px;
    height: 100%;
    background: #fff;
    transform: rotate(15deg);
    filter: blur(15px);
    -webkit-filter: blur(15px);
    animation: skeletonMove 1s infinite;
}
@keyframes skeletonMove {
    from{
        left: -100px;
    }
    to{
        left: calc(100% + 100px);
    }
}
</style>