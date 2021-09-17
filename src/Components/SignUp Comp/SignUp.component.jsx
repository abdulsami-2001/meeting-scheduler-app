import React, { Fragment} from 'react'
import Styles from './SignUp.module.css'
import {NavLink,useHistory} from 'react-router-dom'

const SignUp = (props) => {
    let history = useHistory()
    let {SignUp_InputFields,SignUp_handleSubmit,SignUp_handleInputs} = props
    let {SignUp_EmailField,SignUp_PasswordField, SignUp_FullName} = SignUp_InputFields
    return (
        <Fragment>
            <div className={Styles.parentCont}>
                <form className={Styles.signUpFormCont} onSubmit={(e)=>SignUp_handleSubmit(e,history)}>
                    <label htmlFor="Full Name">
                        <h3 className={Styles.headingText} >Full Name*:</h3>
                        <input type="text" size="60" placeholder="John" name='SignUp_FullName' required value={SignUp_FullName} onChange={(e)=>SignUp_handleInputs(e)} />
                    </label>
                    <br />
                    <label htmlFor="Email Address">
                        <h3 className={Styles.headingText} >Email*:</h3>
                        <input type="email" size="60" placeholder="john@abc.com" name='SignUp_EmailField' required value={SignUp_EmailField} onChange={(e)=>SignUp_handleInputs(e)} />
                    </label>
                    <br />
                    <label htmlFor="Password">
                        <h3 className={Styles.headingText} >Password*:</h3>
                        <input type="password" size="60" name='SignUp_PasswordField' placeholder="Your passowrd" required value={SignUp_PasswordField} onChange={(e)=>SignUp_handleInputs(e)} />
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
