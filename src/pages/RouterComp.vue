<template>
    <h2 class="subTitle">Vue-Router</h2>

    <div class="search-wrap">
        <input type="text" @input="typeSearch" />
        <button @click="goSearch">검색</button>
    </div>
    
    <div class="body-wrap">

        <p v-show="pageNum">현재 페이지 번호 : {{pageNum}}</p>
        <p v-show="target">검색 타겟 : {{target}}</p>

    </div>   


</template>
<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
    name : 'ContactComp',
    setup(){
        const router = useRouter();
        const { query } = useRoute();
        const pageNum = ref(query.page);
        const target = ref(query.target);
        const searchWord = ref('');

        const goSearch = () => {
            router.push('/router?page=1&target=' + encodeURI(searchWord.value));
        }
        const typeSearch = (e) => {
            searchWord.value = e.target.value.trim(); 
            console.log(searchWord.value);
        }

        return{ 
            pageNum,
            target,
            searchWord,
            goSearch,
            typeSearch,
        }
    }        
}

</script>
<style>
.nameWrap{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 150px;
}
.search-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.25rem;
}
.body-wrap{
    padding: 1rem 0;
    margin: 0;
}

.router-list{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.25rem;
    height: 100px;
    list-style: disc;
}
.router-list>li{
    height: 2rem;
    text-align: center;
}

.yourName{
    width: 200px; height: 2rem;
    padding: 0.2rem 0.3rem;
    border-radius: 4px;
    outline: 0;
    font-size: 1rem;
}


</style>