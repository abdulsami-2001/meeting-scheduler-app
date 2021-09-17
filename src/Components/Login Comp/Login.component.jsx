import React, { Fragment} from 'react'
import Styles from './Login.module.css'
import {NavLink} from 'react-router-dom'

const Login = (props) => {

    let {Login_handleSubmit,Login_handleInputs,Login_InputFields} = props
    let {Login_EmailField,Login_PasswordField} = Login_InputFields

    return (
        <Fragment>
            <div className={Styles.parentCont}>
                <form className={Styles.loginFormCont} onSubmit={(e)=>Login_handleSubmit(e)}>
                    <label htmlFor="Email Address">
                        <h3 className={Styles.headingText} >Email*:</h3>
                        <input type="email" size="60" placeholder="john@abc.com" name='Login_EmailField' required value={Login_EmailField} onChange={(e)=>Login_handleInputs(e)} />
                    </label>
                    <br />
                    <label htmlFor="Password">
                        <h3 className={Styles.headingText} >Password*:</h3>
                        <input type="password" size="60" name='Login_PasswordField' placeholder="Your passowrd" required value={Login_PasswordField} onChange={(e)=>Login_handleInputs(e)} />
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
