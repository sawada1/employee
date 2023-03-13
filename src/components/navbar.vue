<template>
    <div class="navbar">
        <h1>employee manger</h1>
        
        <div class="mainlist">
         
            <div class="list" :class="{'active': check}">
                <i @click="check = !check"  class="fa-solid fa-xmark close"></i>
         <div class="navs">
           <router-link to="/">home</router-link>
           <router-link to="/about">about</router-link>
         </div>
       <div class="btns" v-if="!theUser">
       <router-link to="/login">
        <button>login</button>
       </router-link>
   <router-link to="/register">
    <button>register</button>
   </router-link>
       </div>

       <div class="logmain" v-if="theUser">
       <p>login in <span>{{ theUser.email }}</span></p>
       <button class="logout" @click="signout">logout</button>
       </div>

       </div>  
        </div>
      
       <i @click="check = !check" class="fa-solid fa-bars bar"></i>
    </div>
</template>

<script>
import {ref, computed} from 'vue';
import {useStore} from 'vuex'
export default {
setup(){
    const store  = useStore();
     let check = ref(false)
    const theUser = computed(()=>{
       return store.state.user;
    });

    const signout = () =>{
        store.dispatch('signout');
        window.location.reload();
    }
    return{theUser , signout , check}
}
}
</script>

<style lang="scss" scoped>
.navbar{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    background-color: rgb(31, 184, 31);
    h1{
        font-size: 27px;
        color: #fff;
    }
    .bar{
        font-size: 30px;
        cursor: pointer;
        color: #fff;
        display: none;
    }
}


.mainlist{
    .close{
        font-size: 30px;
        color: tomato;
        display: none;
        cursor: pointer;
    }
    .list{
    display: flex;
    align-items: center;
    gap: 20px;
    .navs{
        display: flex;
        align-items: center;
        gap: 20px;
        a{
            color: #fff;
        }
    }
}
.mainnav{
        display: flex;
        align-items: center;
        gap: 50px;
    }
    button{
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
 }
.btns{
 display: flex;
 align-items: center;
 gap: 20px;

}
.logmain{
    display: flex;
    align-items: center;
    gap: 20px;
    p{
        color: #fff;
        span{
            color: #ccc;
        }
    }
    button{
      background-color: tomato;
      color: #fff;
    }
}


}


@media(max-width:780px){
   
    .navbar{
        // position: relative;
        .bar{
            display: block;
        }
        .mainlist{
            overflow-x: hidden;
            .list{
         
         justify-content: center;
         position: fixed;
         top: 0%;
         flex-direction: column;
         right: 0;
         background-color: #333333c5;
         height: 100vh;
         width: 50%;
         transition: 0.5s;
         transform: translateX(150%);
         .close{
         display: block;
         position: absolute;
         top: 10%;
         left: 30px;
         } 
         .navs{
             flex-direction: column;
         }
         &.active{
             transform: translateX(0);
         }
         .btns{
             flex-direction: column;
         }
         .logmain{
             flex-direction: column;
             text-align: center;
             
         }
     }
        }
       
    }
}
</style>