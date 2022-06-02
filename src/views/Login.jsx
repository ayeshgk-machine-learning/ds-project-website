import { useEffect, useState } from "react";

import React from "react";

import { useNavigate ,useLocation} from 'react-router-dom'

import Loader from "../components/Loader";
import {  getAuth,signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    const [error,setError] = useState({
        emailError: '',
        passwordError: ''
      });

    const [ loading, setLoading ] = useState(false);

    const [user,setUser] = useState({
        email: '',
        password: '',
    
    });


    useEffect(()=>{
      setLoading(true);
      
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    },[])

    const clearAuth = () => {
        setUser({
          email: '',
          password: '',
        })
      }
    
      const clearError = () => {
        setError({
          passwordError: '',
          emailError: '',
        })
      }


    
    const handleLogin=()=>{
        console.log(user)
        setLoading(true);
        
        clearError();
        const authentication = getAuth();
        signInWithEmailAndPassword(authentication, user.email, user.password)
          .then((response) => {
            sessionStorage.setItem('AuthToken', response._tokenResponse.refreshToken);
            setLoading(false);
            navigate(from, { replace: true })
            // ...
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            switch (errorCode) {
              case 'auth/invalid-email':
                setError({...error,emailError: 'Invalid email address'});
                break
              case 'auth/wrong-password':
                setError({...error,passwordError: 'Wrong password'});
                break;
            }
            
          });
          setTimeout(() => {
            setLoading(false);
          }, 1500);
      }

      if(loading){
          return <Loader />
      }else{
        return (
            <section className="login">
                <div className="loginContainer">
                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder="Email"
                        autoFocus
                        required
                        value={user.email}
                        onChange={(e) => setUser({...user,email:e.target.value})}
                        />
                    <p className="errorMsg">{error.emailError}</p>
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Password"
                        required
                        value={user.password}
                        onChange={(e) => setUser({...user,password:e.target.value})}
                        autoFocus
                    />
                    <p className="errorMsg">{error.passwordError}</p>
                    <div className="btnContainer">
                        <button 
                        onClick={handleLogin}
                        >
                            Login</button>
                    </div>
                </div>
                
            </section>
            
        )
      }

    
}

export default Login;