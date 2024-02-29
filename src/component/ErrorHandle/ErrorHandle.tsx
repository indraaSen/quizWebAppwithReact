import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorHandle() {
  const navi = useNavigate();
  const goToSignIn = () =>{
    navi("/");
  }
  return (
    <div>
      <h1>Something went wrong. Plase Sign in Again!!</h1>
        <div>
          <button onClick={goToSignIn} style={{color:'blue', textDecoration:'underline'}}>SignIn</button>
        </div>
    </div>
  )
}

export default ErrorHandle
