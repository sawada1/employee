<template>
    <div>
       <h2 style="text-align: center; color:green; margin-top: 50px;">show employee</h2>
          <div class="box">
            <p>name : <span>{{ emp.name }}</span></p>
          <p>employee ID : <span>{{ emp.employee_id }}</span></p>
          <p>department : <span>{{ emp.dept }}</span></p>
          <p>position : <span>{{ emp.position }}</span></p>     
          <div class="btns">
          <router-link to="/">
            <span>back</span> 
          </router-link>
            <span  @click="deletetheemp">delete</span>
          </div>
          </div>

    </div>
    <router-link :to="{name:'editpage', params:{id: id}}">
    <span class="add">edit</span>  
  </router-link>
</template>

<script>
import {ref , computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from  'vue-router'
export default {
   props:['id'],
    setup(props){
     
     const store = useStore();
     const router = useRouter();

     const emp = computed(()=>{
        return store.state.employee;
     });
      
     const showemp = ()=>{
      store.dispatch('showtheemp', props.id);
      console.log(props.id);
    //   console.log(store.state.employee);
    }
    showemp();

    const deletetheemp = () =>{
        try{
            store.dispatch('deleteemp');
            router.push('/');
        }catch(err){
            console.log(err.message);
        }
    
    }

     return{emp , deletetheemp}
    }
}

</script>

<style lang="scss" scoped>
.box{
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    border-radius: 20px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    .btns{
        display: flex;
        align-items: center;
        gap: 10px;
        span{
            padding: 10px; 
            cursor: pointer;
            color: #fff;
            border-radius: 5px;
        }
        span:first-child{
            background-color: gray;
        }
        span:nth-child(2){
            background-color: tomato;
        }
    }
}

</style>