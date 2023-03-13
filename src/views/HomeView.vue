<template>
  <div class="empcontainer">
    <div class="employees">
    <!-- <div v-for="employee in employees">
      <p>points: <span>{{ points }}</span></p>
    </div> -->
    <div class="main">
    <div class="box">
      <h3>employees</h3> 
    </div>
    <div class="mainboxes" v-for="employee in employees">
     <div class="box">
     <div class="info">
  <p>{{ employee.dept }}</p>
<h4><span>{{ employee.employee_id }}: {{ employee.name }}</span></h4>
     </div>
     <router-link :to="{name: 'showemp' , params:{id: employee.id}}">
      <div class="icon">show</div>     
     </router-link>

     </div>

   
  
    </div>
       
    </div>
 
  


 
  </div>  
  </div>
  <router-link to="/add">
    <span class="add">add</span>  
  </router-link>


</template>

<script>
// @ is an alias to /src
import {useRouter} from 'vue-router'
import {ref , computed} from 'vue'
import {useStore} from 'vuex';
export default {
  name: 'HomeView',
  components: {
  },
  setup(){
    let posts = ref([]);
    
    const store = useStore();
const router = useRouter();

    const getData = ()=>{
   store.dispatch('getTheData');        
    }
    getData();
    
    const employees = computed(()=>{return store.state.employees})
    const user = computed(()=>{return store.state.user});

    const check = ()=>{
      if(user){
        router.push('/');
        console.log('cheked')
      }
      else{
        router.push('/login');
      }
    }
    check();

    const showemp = (id)=>{
      store.dispatch('showtheemp', id);
      console.log(id);
    }

    return{getData  , employees}
  }
}
</script>


<style lang="scss">
.empcontainer{
  width: 100%;
   margin: 50px auto; 
}
.employees{
  width: 70%;
  /* background-color: red; */
  padding: 30px;
  border: 2px solid #333;
  margin: 30px auto;
}
.employees h3{
  font-size: 30px;
}
.employees .main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.employees .main .box{
  width: 100%;
  margin: 10px 0px;
  padding: 5px;
  border-bottom: 1px solid #333;
}
.employees .main .mainboxes .box{
 display: flex;
 width: 100%;
 justify-content: space-between;
 align-items: center;
}
.info{
  display: flex;
  align-items: center;
  gap: 10px;
}
.info p{
  background-color: grey;
  padding: 10px 15px; 
  
}
.icon{
  cursor: pointer;
  background-color: #ccc;
  padding: 10px;
}
.add{
  background-color: green;
  color: #fff;
  position: fixed;
  right: 30px;
  top: 90%;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
</style>