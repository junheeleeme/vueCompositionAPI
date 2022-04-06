<template>
    <h2 class="subTitle">Vue-Router</h2>

    <ul class="router-list">
        <li>Params : {{param}}</li>
        <li>Query String : {{queryName}}</li>
    </ul>

    <div class="nameWrap">

        <div class="inputWrap">
            <div>이름 : </div> 
            <input type="text" @input="changeName" class="yourName" maxlength="30">
        </div>

        <div class="btnWrap">
            <button class="btn" @click="router.push(`/router/${queryStr}`)">Param Test</button>
            <button class="btn" @click="router.push(`/router/param?name=${queryStr}`)">Query Test</button>
        </div>

    </div>    

</template>
<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
    name : 'ContactComp',
    setup(){
        const router = useRouter();
        const { params, query } = useRoute();
        const param = ref(params.id);
        const queryName = ref(query.name);
        const queryStr = ref('');

        console.log(query)

        const changeName = (e) => {
            queryStr.value = encodeURI(e.target.value.trim());
            console.log(queryStr.value)
        }
        
        return { 
            router,
            param,
            queryName,
            changeName,
            queryStr
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
.inputWrap{
    display: flex;
    justify-content: center;
    align-items: center;
}
.nameWrap>div {
    font-size: 1.25rem;
    margin-right: 0.5rem;
    margin: 0;
}
.inputWrap>input{
    margin-left: 0.5rem;
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