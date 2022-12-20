import { useState } from "react"
import {signInAuthUserWithEmailAndPassword} from "../firebase"
import FormInput from "./form-input"
import "./sign-in.css"
import { Link, useNavigate } from "react-router-dom";

const defaultFormFields = {
    email : '',
    password : '',
}
const SignInForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();


        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            navigate("/Home")
            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert("Password Incorrect"); 
                break;

                case 'auth/user-not-found':
                    alert("User doesn't exist")
                break;

                default :
                    alert(error)
            }
        }
    }
    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value })
    }
    return (
            <div className="SignInContainer">
            <h2>Already have an account?</h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={handleSubmit}>
             
                <FormInput 
                    label="Email"
                    type="email" 
                    id="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />
                
                <FormInput 
                    label="Password"
                    type="password" 
                    id="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <div className="buttons">
                    <button className="button-container" type="submit">Sign In</button>
                   <Link to="/forgot-password">Forgot Password</Link>
                </div>

                
            </form>
        </div>
      
    )
}

export default SignInForm