<template>
    <div>
    <form action="" @submit.prevent>
        <h3>new employee</h3> 
        <input type="text" v-model="idd" placeholder="employee id">
        <input type="text" v-model="namee" placeholder="name">
        <input type="text" v-model="deptt" placeholder="department">
        <input type="text" v-model="positionn"  placeholder="poistion">
        <div class="btns">
        <button class="submit" @click="addto">submit</button>
         <router-link to="/">
            <button>cancel</button>     
         </router-link>
        </div>
    </form>
    
    </div>
</template>

<script>
import {ref , computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router';
export default {
setup(){
    let idd = ref(null);
    let namee = ref(null);
    let deptt = ref(null);
    let positionn = ref(null);
const store = useStore();
const router = useRouter();
const addto = () =>{
    try{
        let data = {
        employee_id: idd.value,
        name: namee.value,
        dept: deptt.value,
        position: positionn.value,
    }
store.dispatch('addemployee', data);
router.push('/');
    } catch(err){
        console.log(err.message);
    }

}

    return{idd , namee , deptt , positionn , addto}
}
}

</script>

<style lang="scss">
 form{
    // margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 50px 10%;
    gap: 50px;
    h3{
        font-size: 20px;
        text-align: center;

    }
    input:not(:last-child){
        border: none;
        border-bottom: 1px solid #333;
        padding: 10px;
        font-size: 20px;
        width: 100%;
    }
    .btns{
        display: flex;
        align-items: center;
        gap: 10px;
        button{
            border: none;
            padding: 10px; 
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;
            color: #fff;
            background-color: #333;
        }
        .submit{
            background-color: green;
        }
    }
 }

</style>