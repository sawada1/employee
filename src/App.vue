<template>
 <navbar/>
  <router-view/>
</template>



<script>
 import navbar from './components/navbar.vue'
 import {useRouter} from 'vue-router';
 import {useStore} from 'vuex'
 import {computed} from 'vue'
export default {
  components:{
    navbar
  },
  setup(){
const store = useStore();
const router = useRouter();

const user = computed(()=>{
    return store.state.user;
  });

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


  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


body{
  overflow-x: hidden;
}
nav {
  padding: 30px;
}
a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
