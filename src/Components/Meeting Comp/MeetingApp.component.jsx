import React from 'react'
import Login from '../Login Comp/Login.component'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import SignUp from '../SignUp Comp/SignUp.component'

const MeetingApp = () => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={()=><Login/>}  />
                    <Route exact path="/login" render={()=><Login/>}  />
                    <Route exact path="/signup" render={()=><SignUp/>}  />
                </Switch>
            </BrowserRouter>
    )
}

export default MeetingApp
