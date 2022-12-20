import { useState } from "react"
import {createAuthUserWithEmailAndPassword} from "../firebase"
import {updateProfile} from "firebase/auth"

import FormInput from "./form-input"
import './sign-up.styles.css'
const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    address : '',
}

const SignUpForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName , email, password , address} = formFields;

    
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();


        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
           await updateProfile(user, {
            displayName: formFields.displayName,
          });
            resetFormFields();
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Email already in use!")
            }
            console.log("user creation encountered an error", error);
        }
    }
    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value })
    }
    return (
        <div className="signupContainer">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                label="Display Name"
                    type="text" 
                    required 
                    id="dname" 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                />
                
                <FormInput
                label="E-mail"
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
                
                <FormInput
                    label="Address"
                    type="text" 
                    id="address" 
                    required    
                    onChange={handleChange} 
                    name="address" 
                    value={address}
                />

                <button className="button-container" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm