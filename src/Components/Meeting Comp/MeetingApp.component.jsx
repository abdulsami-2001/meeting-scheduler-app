import React,{useState} from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Login from '../Login Comp/Login.component'
import SignUp from '../SignUp Comp/SignUp.component'
import Team from '../Team Comp/Teams.component'
import Error from '../Error Comp/Error.component'

const MeetingApp = () => {


    // Main State

        let [User_Data,setUser_Data] = useState([]);

    // Main State



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

    let {SignUp_FullName,SignUp_EmailField,SignUp_PasswordField} = SignUp_InputFields

    const SignUp_handleInputs = (e) => {
        setSignUp_InputFields({
            ...SignUp_InputFields,
            [e.target.name]: e.target.value
        })
    }

    const SignUp_handleSubmit = (e,history) => {
        e.preventDefault()

        setUser_Data([
            ...User_Data,
            {
                UserDetails: {

                    User_FullName: SignUp_FullName,
                    User_EmailAddress: SignUp_EmailField,
                    UserPassword:SignUp_PasswordField,
                    isLoggedIn: true,
                    User_Key: Date.now(),
                },
                UserTeams: []
            }
        ])
        
       
        setSignUp_InputFields({
            ...SignUp_InputFields,
            SignUp_FullName:"",
            SignUp_EmailField: "",
            SignUp_PasswordField: ""
        })

        history.push("/teams");

    }
    // SignUp Saaman
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={()=><Login Login_handleSubmit={Login_handleSubmit} Login_handleInputs={Login_handleInputs} Login_InputFields={Login_InputFields} />}  />
                <Route exact path="/login" render={()=><Login Login_handleSubmit={Login_handleSubmit} Login_handleInputs={Login_handleInputs} Login_InputFields={Login_InputFields} />}  />
                <Route exact path="/signup" render={()=><SignUp SignUp_handleSubmit={SignUp_handleSubmit} SignUp_handleInputs={SignUp_handleInputs} SignUp_InputFields={SignUp_InputFields}  />}  />
                <Route exact path="/teams" render={()=><Team User_Data={User_Data} setUser_Data={setUser_Data}  />} />
                <Route  component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default MeetingApp


