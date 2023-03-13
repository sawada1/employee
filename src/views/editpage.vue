<template>
    <div>
        <h2 style="text-align: center; color: green; margin-top: 50px;">edit</h2>
        <form action="" @submit.prevent>
          <input type="text" v-model="theid">
          <input type="text" v-model="thename">
          <input type="text" v-model="thedept">
          <input type="text" v-model="thepos">
          <div class="btns">
          <button @click="edit">submit</button>
          <router-link :to="{name:'showemp'}">
            <button>cancel</button>      
          </router-link>
    
          </div>
        </form>
    </div>
</template>

<script >
import {ref , computed , onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    props:['id' ,'emp'],
    setup(props){
      
        const store = useStore();
        const router = useRouter();
        const showemp = ()=>{
      store.dispatch('showtheemp', props.id);
      console.log(props.id);
    //   console.log(store.state.employee);
    }
    showemp();


        const emp = computed(()=>{
        return store.state.employee;
     });



        let thename = ref(null);
        let theid = ref(null);
        let thedept = ref(null);
        let thepos = ref(null);
  
   
     onMounted(()=>{
        thename.value = store.state.employee.name;
        theid.value = store.state.employee.employee_id;
        thedept.value = store.state.employee.dept;
        thepos.value = store.state.employee.position;
    
     })


    

    const edit = () =>{
        let doc ={
            name: thename.value,
            employee_id: theid.value,
            dept: thedept.value,
            position: thepos.value,
        }
        try{
            store.dispatch('editemp', doc);
            router.back();
        } catch(err){
            console.log(err.message);
        }
        console.log(doc);
    }
   

        return{thename , theid , thedept , thepos , edit}
    }
}
</script>

<style lang="scss">


</style>