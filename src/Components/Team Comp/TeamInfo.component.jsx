import React,{useState} from 'react'
// import Styles1 from './TeamInfo.module.css'
import Styles from './Teams.module.css'
import CreateNTeam from './CreateNTeam.component'


const TeamInfo = (props) => {

    let {setUser_Data, User_Data} = props

    let [ShowModal,setShowModal] = useState(false)
    const CNTInputFields_handleCancel = () =>{
        setShowModal(false)
    }
    
    const LoggedInUser = User_Data.filter(({UserDetails})=>{
        return UserDetails.isLoggedIn === true
    })

    const UserTeamsArray =  LoggedInUser.map(({UserTeams})=>{
        return UserTeams
    })
    console.log(...UserTeamsArray)
    console.log(UserTeamsArray.length)

    if(UserTeamsArray[0].length === 0){

        return(
            <div className={Styles.parentCont}>
                <h1>No Team Found!</h1>
                <div className={Styles.createTeamCont}>
                    <span className={Styles.showCNT} >Create New Team</span>
                    <button onClick={()=>{setShowModal(true)}} className={Styles.btn}>+</button>
                </div>
                <div className={ ShowModal ?  Styles.CNTModal : Styles.CNTModalHide }>
                    <CreateNTeam User_Data={User_Data} setUser_Data={setUser_Data} CNTInputFields_handleCancel={CNTInputFields_handleCancel} />
                </div>
            </div>
        )
    }else{
        
        return ( <div key={Date.now()} className={ true ?  Styles.CNTModal : Styles.CNTModalHide }>
                    {UserTeamsArray[0].map(({TeamName, TeamKey})=>{
                        return <h1 key={TeamKey} >{TeamName} h</h1>
                    })}
                    <CreateNTeam User_Data={User_Data} setUser_Data={setUser_Data} CNTInputFields_handleCancel={CNTInputFields_handleCancel} />
                </div>)
        
    }
    
    
}

export default TeamInfo



