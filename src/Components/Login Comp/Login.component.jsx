import React, { Fragment,useState } from 'react'
import Styles from './Login.module.css'
import {NavLink} from 'react-router-dom'

const Login = () => {

    let [InputFields, setInputFields] = useState({
        EmailField: "",
        PasswordField: ""
    })

    let {EmailField,PasswordField} = InputFields

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
            EmailField: "",
            PasswordField: ""
        })
    }

    return (
        <Fragment>
            <div className={Styles.parentCont}>
                <form className={Styles.loginFormCont} onSubmit={handleSubmit}>
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
                    <input type="submit" value="Login" />
                    <div className="navCont" style={{display:"flex"}}>
                        <p style={{marginRight:"5px"}} >Create An Account?</p>
                        <NavLink to="/signup" exact ><button>Sign Up</button></NavLink>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Login
