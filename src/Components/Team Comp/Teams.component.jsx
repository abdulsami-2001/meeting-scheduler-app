import React from 'react'
import TeamInfo from './TeamInfo.component'
// import CreateNTeam from './CreateNTeam.component'


const Team = (props) => {
    let {User_Data, setUser_Data} = props
    
    if(User_Data.length !== 0){
        return User_Data.map((item)=>{
            let {UserTeams,UserDetails} = item;
            if(UserDetails.isLoggedIn && UserTeams.length === 0){
                return <TeamInfo key={Date.now()} User_Data={User_Data} setUser_Data={setUser_Data} />
            }else if(UserDetails.isLoggedIn && UserTeams.length !== 0){
                return <TeamInfo key={Date.now()} User_Data={User_Data} setUser_Data={setUser_Data} />
            }else{
                return <h1 key={Date.now()}>You're not login</h1>
            }
        })
        
    }else{
        return <h1>Login krdo</h1>
    }
    
    
}

export default Team
