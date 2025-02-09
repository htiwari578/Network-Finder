import React, {  useState } from 'react'
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth'
import { auth,provider } from '../utils/Firsebase'

import { useNavigate } from 'react-router-dom'


const backendUrl = import.meta.env.VITE_BACKEND_URL; 

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const handleLogin = async ()=>{
      setLoading(true);
        try {
          
          const response = await signInWithPopup(auth , provider)
          const user = response.user;
          const userData = { email: user.email }; // ✅ Correctly defining email
          console.log("Logging in with:", userData);
      
          const { data } = await axios.post(`${backendUrl}/api/auth/google-login`, userData);
          console.log("login successfull",data);
          navigate('/');
        } catch (error) {
          console.error("login error", error)
        }finally {
          setLoading(false); 
        }
       
      };
      return (
        <div>
          <h1 >Login with Google</h1>
          <button onClick={handleLogin} className="font-medium"
            disabled={loading}
          >
              {loading ? "Logging in..." : "Google"}</button>
        </div>
      )
    }
export default Login