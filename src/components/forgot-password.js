
import { useState } from "react"
import {passwordReset} from "../firebase"
import FormInput from "./form-input"
import "./forgot-password.css"
import { Link } from "react-router-dom"

const defaultFormFields = {
    email : ''
}
const ForgotPassword = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email} = formFields;

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        try{
             await passwordReset(email);
            // console.log(user)
            alert("Email sent successfully")
            resetFormFields();
        }catch(error){
                alert(error)
            }
        }
    
    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value })
    }
    return (
            <div className="passwordContainer">
            <span >Enter Email</span>
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
             
                <button className="button-container" type="submit">Send Link</button>
                <Link className="redirect" to="/">Sign In</Link>
            </form>
        </div>   
    )
    }

export default ForgotPassword