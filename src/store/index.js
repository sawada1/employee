import { createStore } from 'vuex'
import {colref , db , auth} from '../firebase/firebase-data'
import {
  getDocs,
  addDoc,
getDoc,
doc,
updateDoc,
deleteDoc,
} from 'firebase/firestore';

import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const store =  createStore({
  state: {
    user: null,
    employees: [],
    employee: {},
    theId: null,
    authisready: false,
  },
  getters: {
  },
  mutations: {
  
      thedata(state , curr){
        state.employees = curr;
      },
      addthedata(state , curr){
        state.employees.push(curr);
      },
      show(state , curr){
        state.employee = curr;
      },
      theedit(state , curr){
        state.employee = curr;
      },

      gettheid(state, curr){
        state.theId = curr;
      },


      setUser(state , playload){
        state.user = playload
        console.log('user state changed: ', state.user);
      },

       setAuth(state , playload){
        state.authisready = playload;
       },
  },
  actions: {

    async signup(context, {email , password}){
      console.log('sign up');
      const resp = await createUserWithEmailAndPassword(auth , email , password);
      console.log(resp.user);
      console.log(resp.user.displayName);
      if(resp){
        context.commit('setUser', resp.user);
      } else{
        throw Error('could not complete');
      }
    },


    async loginup(context, {email , password}){
      console.log('login up');
      const resp = await signInWithEmailAndPassword(auth , email , password);
      if(resp){
        context.commit('setUser', resp.user);
        // console.log(resp.user.accessToken);
        console.log(resp.user.email);
        // localStorage.setItem("token",resp.user.accessToken);
        // localStorage.setItem("email",resp.user.email);
      } else{
        throw Error('could not complete');
      }
    },


    async signout (context){
      console.log('signout sucesss');
      localStorage.clear();
      await signOut(auth);
      context.commit('setUser', null);
    },

    async getTheData(context){
      await getDocs(colref)
      .then((resp)=>{
        let data = [];
        resp.docs.forEach((doc)=>{
           data.push({...doc.data(), id: doc.id});
        });
        console.log(data);
       context.commit('thedata', data);    
      }).catch((err)=>console.log(err.message));
    
    },

    async addemployee(context , data){
      await addDoc(colref , data)
      .then((doc)=>{
          console.log('added');
          context.commit('addthedata',data)
      }).catch((err)=> console.log(err.message))
      },


       showtheemp(context , id){
        context.commit('gettheid' ,id)
      const col = doc(db , 'employees', id);
      getDoc(col)
      .then((rep)=>{
         context.commit('show',rep.data());
        console.log(rep.data())
      }).catch((err)=>console.log(err.message))
      },

       editemp(context , data){
        let id = this.state.theId
      const col = doc(db , 'employees' , id);
        updateDoc(col, data)
        .then((rep)=>{
           context.commit('theedit', data);
          console.log(rep.data())
        }).catch((err)=>console.log(err.message));
   
      },

      deleteemp(){
        let id = this.state.theId;
        let thedoc = doc(db , 'employees', id)
        deleteDoc(thedoc);
      }

  },



  modules: {
  }
});

const unsub = onAuthStateChanged(auth , (user)=>{
  store.commit('setAuth', true);
  store.commit('setUser', user);
  unsub();
});

export default store
