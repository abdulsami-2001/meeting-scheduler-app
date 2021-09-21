import React from 'react'
import TeamInfo from './TeamInfo.component'
// import CreateNTeam from './CreateNTeam.component'

const Team = (props) => {
    let {User_Data,CNTInputFields_handleSubmit,CNTInputFields_handleChange,CNTInputFields} = props
    
    
    if(User_Data.length !== 0){
        return User_Data.map((item)=>{
            let {UserTeams,UserDetails} = item;
            if(UserDetails.isLoggedIn && UserTeams.length === 0){
                return <TeamInfo CNTInputFields_handleSubmit={CNTInputFields_handleSubmit} CNTInputFields_handleChange={CNTInputFields_handleChange} CNTInputFields={CNTInputFields}  key={89979} />
            }else if(UserDetails.isLoggedIn && UserTeams.length !== 0){
                return <h1 key={Date.now()}>waah bhaee</h1>
            }else{
                return <h1 key={Date.now()}>You're not login</h1>
            }
        })
        
    }else{
        return <h1>Login krdo</h1>
    }
    
    
}

export default Team
