
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Home';
import Welcome from './components/Welcome';
import { auth } from "./firebase"
import { useEffect, useState } from 'react';
import ForgotPassword from './components/forgot-password';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName)
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (  
    <>
    <div className='container'>


    </div>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/Home" element={<Home name={userName} />} />
            <Route path='/forgot-password'element={<ForgotPassword/>}/>
            {/* <Route/> */}
          </Routes>
        </BrowserRouter>
        </>  
  );
}

export default App;
