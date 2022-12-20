import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOutUser } from './firebase'




const Home = (props) => {
  const navigate = useNavigate();
  const handlesignout = () =>{
    signOutUser();
    navigate('/');
  }
  return (
    <div className='container'>
      <p>Welcome , {props.name}</p>
      <button className="button-container"  onClick={handlesignout}>Sign Out</button>
    </div>
  )
}

export default Home
