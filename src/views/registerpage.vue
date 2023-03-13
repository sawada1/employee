<template>
    <div class="main">
        <div class="thelogin">
        <h1>register</h1>
        <input type="text" v-model="theEmail" placeholder="enter your email">
        <input type="password" v-model="thepass" placeholder="enter your password">
        <button @click="registerNew">register</button>
    </div>
    
    </div>
   
</template>

<script >
import {ref , computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    setup(){
     const store = useStore();
     const router = useRouter();
     let theEmail = ref(null);
     let thepass = ref(null);


     const registerNew = () =>{
        try{
            store.dispatch('signup', {
              email:  theEmail.value, 
               password : thepass.value,
            });
         router.push('/');
        } 
        catch(err){
            console.log(err.message);
        }
     }

     return{theEmail , thepass , registerNew }
    }
}

</script>

<style lang="scss">


</style>