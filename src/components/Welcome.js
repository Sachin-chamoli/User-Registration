import React from 'react'
import SignInForm from './sign-in.component'
import SignUpForm from './sign-up.component'
import "./Welcome.css"

const Welcome = () => {
  return (
    <div className='container'>
      <SignUpForm/>
      <SignInForm/>
    </div>
  )
}

export default Welcome
