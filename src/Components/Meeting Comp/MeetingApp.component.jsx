import React,{useState} from 'react'
import Login from '../Login Comp/Login.component'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import SignUp from '../SignUp Comp/SignUp.component'

const MeetingApp = () => {

    let [User_State,setUser_State] = useState({
        UserData: [],
    });


    // Login Saaman
    let [Login_InputFields, setLogin_InputFields] = useState({
        Login_EmailField: "",
        Login_PasswordField: ""
    })

    const Login_handleInputs = (e) => {
        setLogin_InputFields({
            ...Login_InputFields,
            [e.target.name]: e.target.value
        })
    }

    const Login_handleSubmit = (e) => {
        e.preventDefault()
        setLogin_InputFields({
            ...Login_InputFields,
            Login_EmailField: "",
            Login_PasswordField: ""
        })
    }
    // Login Saaman


    // SignUp Saaman
    let [SignUp_InputFields, setSignUp_InputFields] = useState({
        SignUp_FullName:"",
        SignUp_EmailField: "",
        SignUp_PasswordField: ""
    })

    const SignUp_handleInputs = (e) => {
        setSignUp_InputFields({
            ...SignUp_InputFields,
            [e.target.name]: e.target.value
        })
    }

    const SignUp_handleSubmit = (e) => {
        e.preventDefault()

        setUser_State({
            ...User_State,
            UserData:[{...SignUp_InputFields, isLoggedIn: true}]
        })

        setSignUp_InputFields({
            ...SignUp_InputFields,
            SignUp_FullName:"",
            SignUp_EmailField: "",
            SignUp_PasswordField: ""
        })
    }
    // SignUp Saaman

    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={()=><Login Login_handleSubmit={Login_handleSubmit} Login_handleInputs={Login_handleInputs} Login_InputFields={Login_InputFields} />}  />
                    <Route exact path="/login" render={()=><Login Login_handleSubmit={Login_handleSubmit} Login_handleInputs={Login_handleInputs} Login_InputFields={Login_InputFields} />}  />
                    <Route exact path="/signup" render={()=><SignUp SignUp_handleSubmit={SignUp_handleSubmit} SignUp_handleInputs={SignUp_handleInputs} SignUp_InputFields={SignUp_InputFields}  />}  />
                </Switch>
            </BrowserRouter>
    )
}

export default MeetingApp
