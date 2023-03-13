
import {initializeApp} from 'firebase/app'
import {
getAuth,
} from 'firebase/auth';

import {
getFirestore,
collection,
getDocs,
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCvTOuasOgPKqreIvGodkMGs3a6Mk9Ja1o",
    authDomain: "employees-e2c4d.firebaseapp.com",
    projectId: "employees-e2c4d",
    storageBucket: "employees-e2c4d.appspot.com",
    messagingSenderId: "992746635271",
    appId: "1:992746635271:web:a283f653f136997b0e6aa2"
  };

  initializeApp(firebaseConfig);

const db = getFirestore();
const colref = collection(db ,'employees');

const auth = getAuth();




export  {colref , db , auth}