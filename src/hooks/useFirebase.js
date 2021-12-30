
import { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useEffect } from 'react';
 
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({ });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]= useState('');
    const [admin, setAdmin]= useState(false);
   
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        
        .catch(error => {
            setError(error.message)
        })
        
    }

    //observe state change

    useEffect(()=>{
      const unsub= onAuthStateChanged(auth,user =>{
        if (user){
          setUser(user);
        }
        else{
          setUser({})
        }
        setIsLoading(false);
      })
    },[auth])

    useEffect(()=>{
      fetch(`https://fathomless-reaches-77675.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data=> setAdmin(data.admin))
    },[user.email])  

    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              
              const newUser = { email, displayName: name };
              setUser(newUser);
              // save user to the database
              saveUser(email, name);
              updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              history.replace('/');
              
          })
          .catch((error) => {
             
          })
          .finally(() => setIsLoading(false));
  }
      const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                
                
            })
            .catch((error) => {
               
            })
            .finally(() => setIsLoading(false));
    }
    
    
    
     
    const logout = ()=>{
            signOut(auth)
            .then(()=>{
                setUser({});
                window.location.reload();
            })
    }

    const saveUser= (email,displayName) =>{
      const user= {email, displayName};
      fetch('https://fathomless-reaches-77675.herokuapp.com/users',{
        method: 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then()

     
    }

    

    return {
        user,isLoading, setIsLoading,error, signInUsingGoogle, logout,  loginUser, registerUser, admin, 
    }
}

export default useFirebase;