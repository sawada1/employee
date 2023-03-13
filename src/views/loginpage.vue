<template>
    <div class="main">
        <div class="thelogin">
        <h1>login</h1>
        <input type="text"   v-model="theEmail" placeholder="enter your email">
        <input type="password" v-model="thepass"  placeholder="enter your password">
        <button @click="loginUser">login</button>
    </div>   
    </div>
 
</template>

<script>
import {ref , computed} from 'vue'
import { useStore} from 'vuex'
import {useRouter} from 'vue-router'
import { async } from '@firebase/util';

export default {
    setup(){
        const store = useStore();
     const router = useRouter();
     let theEmail = ref(null);
     let thepass = ref(null);

     const user = computed(()=>{
        return store.state.user;
     });

     const check = ()=>{
      if(user){
        router.push('/');
        console.log('cheked')
      }
    }
    check();

     const loginUser = async () =>{
        try{
           await store.dispatch('loginup', {
              email:  theEmail.value, 
               password : thepass.value,
            });
         router.push('/');
        } 
        catch(err){
            console.log(err.message);
        }
     }

     return{theEmail , thepass , loginUser }
    }
}
</script>

<style lang="scss">
.main{
    width: 100%;
    .thelogin{
    width: 70%;
    margin: 20px auto;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px;
    border-radius: 10px;
    input{
        width: 70%;
        padding: 10px;
        border: none;
        border-bottom: 1px solid #333;
        outline: none;
        font-size: 18px;
        background-color: transparent;
    }
    button{
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        border: none
    }
}
}



</style>