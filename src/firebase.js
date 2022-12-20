import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDxuYvWYC-DSHFYG-Bs5uVMH3VMgACsLyo",
  authDomain: "user-registration-b0cab.firebaseapp.com",
  projectId: "user-registration-b0cab",
  storageBucket: "user-registration-b0cab.appspot.com",
  messagingSenderId: "772227959964",
  appId: "1:772227959964:web:d95ccd7c80c5979880f159"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();


export const createAuthUserWithEmailAndPassword = async(email, password) =>{

    if(!email || !password) return ;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async(email, password) =>{

    if(!email || !password) return ;
  
    return await signInWithEmailAndPassword(auth, email, password);
  }
  
  export const signOutUser = async() => await signOut(auth);

  export const passwordReset = async (email) => {
    return await sendPasswordResetEmail(auth, email);
  }