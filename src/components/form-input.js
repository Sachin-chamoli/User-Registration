import"./form-input.css";

const FormInput = ({label, ...otherProps}) =>{
    return(
        <div className="Group">
            {label && 
            <label className= "FormInputLabel ">
                    {label}
            </label>
            }
            <input className="Input" {...otherProps}/>
        </div>
    )
}

export default FormInput