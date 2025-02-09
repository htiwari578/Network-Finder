import React from 'react'
import { auth, provider } from './utils/Firsebase'
import { signInWithPopup } from 'firebase/auth'


const App = () => {

  const handleLogin = async ()=>{
    const response = await signInWithPopup(auth , provider)
    const user = response.user
    const userData = {
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      phoneNumber: user.phoneNumber
    }
   
  }
  return (
    <div>
      <h1 >Login with Google</h1>
      <button onClick={handleLogin} className="font-medium">Google</button>
    </div>
  )
}

export default App
