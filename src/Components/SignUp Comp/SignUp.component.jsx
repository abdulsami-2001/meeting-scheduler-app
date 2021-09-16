import React, { Fragment,useState } from 'react'
import Styles from './SignUp.module.css'
import {NavLink,useHistory} from 'react-router-dom'

const SignUp = () => {

    let history = useHistory()

    let [InputFields, setInputFields] = useState({
        FullName:"",
        EmailField: "",
        PasswordField: ""
    })

    let {EmailField,PasswordField, FullName} = InputFields

    const handleInputs = (e) => {
        setInputFields({
            ...InputFields,
            [e.target.name]: e.target.value
        })

       
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputFields({
            ...InputFields,
            FullName:"",
            EmailField: "",
            PasswordField: ""
        })

        setTimeout(() => {
            
            history.push("/login")
        }, 3000);

    }

    return (
        <Fragment>
            <div className={Styles.parentCont}>
                <form className={Styles.signUpFormCont} onSubmit={handleSubmit}>
                    <label htmlFor="Full Name">
                        <h3 className={Styles.headingText} >Full Name*:</h3>
                        <input type="text" size="60" placeholder="John" name='FullName' required value={FullName} onChange={handleInputs} />
                    </label>
                    <br />
                    <label htmlFor="Email Address">
                        <h3 className={Styles.headingText} >Email*:</h3>
                        <input type="email" size="60" placeholder="john@abc.com" name='EmailField' required value={EmailField} onChange={handleInputs} />
                    </label>
                    <br />
                    <label htmlFor="Password">
                        <h3 className={Styles.headingText} >Password*:</h3>
                        <input type="password" size="60" name='PasswordField' placeholder="Your passowrd" required value={PasswordField} onChange={handleInputs} />
                    </label>
                    <br />
                    <input type="submit" value="SignUp" />
                    <div className="navCont" style={{display:"flex"}}>
                        <p style={{marginRight:"5px"}} >Have An Account?</p>
                        <NavLink to="/login" exact ><button >Login</button></NavLink>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default SignUp
