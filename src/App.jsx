import { useState,useEffect } from 'react'
import logo from './logo.svg'
import { BrowserRouter,Route, Routes,Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
import Loader from './components/Loader';


import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import fire from './fire';
import {  getAuth,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";

import Router from './navigation/Router';



function App() {
  // const navigate = useNavigate();

  const handleLogout=()=>{
        fire
        .signOut()
        .catch(error=>{
          console.log(error)
        })

        sessionStorage.removeItem('AuthToken');
        // navigate('/home')

  }

  //   const handleListner = ()=>{
 
  //   onAuthStateChanged(fire,user=>{
  //     if(user){
  //       // clearAuth();
  //       console.log("user email ",user.email);
  //       setUserAccount({
  //         email: user.email,
  //         password: '',
  //         user:user
  //       })

  //     }else{
  //       setUserAccount({

  //         email: '',
  //         password: '',
  //         user:null
  //       })
  //     }
  //   })

  // }


  // async function handleLogin() {
  //   setLoading(true);
  //   try {
  //     await login(user.email, user.password);
  //   } catch {
  //     alert("Error!");
  //   }
  //   setLoading(false);
  // }

  // async function handleLogout() {
  //   setLoading(true);
  //   try {
  //     await logout();
  //   } catch {
  //     alert("Error!");
  //   }
  //   setLoading(false);
  // }



  // useEffect(()=>{
  //   setLoading(true);
  
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // },[])

  // if (loading) {
  //   return <Loader />;
  // }

//   const RequireAuth = ({children}) => {
//     const location = useLocation();
//     const user = getAuth();
//     console.log("auth: " ,user);

//     return (
//         <div>
//             {userAccount.user ? children : <Navigate to="/login" state={{from:location.pathname}}/>}
//         </div>
//     )
// }

  return (
    <div className="App">
      
      {/* { userAccount.user  
      ? <Home 
      handleLogout={handleLogout}
      user = {userAccount}
      /> 
      :<Login
      handleLogin={handleLogin}
      error={error}
      user={userAccount}
      setUser={setUserAccount}
      />
      } */}
      <Router 
        handleLogout={handleLogout}
      />
          
      
    </div>
    // <>
    //   <_404/>
    // </>
  )
}

export default App
