import React,{useState} from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Login from '../Login Comp/Login.component'
import SignUp from '../SignUp Comp/SignUp.component'
import Team from '../Team Comp/Teams.component'
import Error from '../Error Comp/Error.component'

const MeetingApp = () => {


    // Main State

    let [User_State,setUser_State] = useState({
        UserData: [{}],
    });
    let {UserData} = User_State;

    // Main State


    // Create New Team
        let [CNTInputFields,SetCNTInputFields] = useState({
            TeamName: "",
            EmailOfTeamMembers: ""
        })

        const CNTInputFields_handleChange = (e) => {
           SetCNTInputFields({
               ...CNTInputFields,
               [e.target.name]: e.target.value
           })
        }


        const CNTInputFields_handleSubmit = (e, CNTInputFields_handleCancel) => {
            e.preventDefault()

            setUser_State({
                ...User_State,
                UserData: [{...UserData[0], ...CNTInputFields}]
            })

            SetCNTInputFields({
                TeamName: "",
                EmailOfTeamMembers: ""
            })
            CNTInputFields_handleCancel()
        }
    
    // Create New Team

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

    const SignUp_handleSubmit = (e,history) => {
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

        history.push("/teams");

    }
    // SignUp Saaman
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={()=><Login Login_handleSubmit={Login_handleSubmit} Login_handleInputs={Login_handleInputs} Login_InputFields={Login_InputFields} />}  />
                <Route exact path="/login" render={()=><Login Login_handleSubmit={Login_handleSubmit} Login_handleInputs={Login_handleInputs} Login_InputFields={Login_InputFields} />}  />
                <Route exact path="/signup" render={()=><SignUp SignUp_handleSubmit={SignUp_handleSubmit} SignUp_handleInputs={SignUp_handleInputs} SignUp_InputFields={SignUp_InputFields}  />}  />
                <Route exact path="/teams" render={()=><Team CNTInputFields_handleSubmit={CNTInputFields_handleSubmit} CNTInputFields_handleChange={CNTInputFields_handleChange} CNTInputFields={CNTInputFields} UserData={UserData} />} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default MeetingApp
