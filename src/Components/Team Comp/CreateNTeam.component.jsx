import React,{useState} from 'react'
import Styles from './CreateNTeam.module.css'
const CreateNTeam = (props) => {
    let {CNTInputFields_handleCancel,User_Data,setUser_Data} = props

    // Create New Team
        let [CNTInputFields,SetCNTInputFields] = useState({
            TeamName: "",
            EmailOfTeamMembers: ""
        })

        let {TeamName,EmailOfTeamMembers} = CNTInputFields

        const CNTInputFields_handleChange = (e) => {
           SetCNTInputFields({
               ...CNTInputFields,
               [e.target.name]: e.target.value
           })
        }


            const LoggedInUser = User_Data.filter(({UserDetails})=>{
                return UserDetails.isLoggedIn === true
            })

            const NotLoggedInUser = User_Data.filter(({UserDetails})=>{
                return UserDetails.isLoggedIn === false
            })

        const CNTInputFields_handleSubmit = (e, CNTInputFields_handleCancel) => {
            e.preventDefault();

            LoggedInUser[0].UserTeams = [...User_Data[0].UserTeams, {TeamName: TeamName,EmailOfTeamMembers:EmailOfTeamMembers,TeamKey:Date.now(),TeamOwner_Key: LoggedInUser[0].UserDetails.User_Key }]

            setUser_Data([
                ...NotLoggedInUser,
                ...LoggedInUser

            ])

            SetCNTInputFields({
                TeamName: "",
                EmailOfTeamMembers: ""
            })
            CNTInputFields_handleCancel();
        }
    
    // Create New Team


    return (
        <>
            <div className={Styles.parentCont}>
                <h3>Create New Team</h3>
                <form onSubmit={(e)=>CNTInputFields_handleSubmit(e,CNTInputFields_handleCancel)} >
                    <br />
                    <input type="text" value={TeamName} onChange={(e)=>CNTInputFields_handleChange(e)} name="TeamName" placeholder="Team Name" />
                    <br /><br />
                    <input type="text" value={EmailOfTeamMembers} onChange={(e)=>CNTInputFields_handleChange(e)}  name="EmailOfTeamMembers" placeholder="Members(type email)" />
                    <br /><br />
                   <div style={{display:"flex", justifyContent:"space-around"}} > 
                        <input type="submit" value="Submit" />
                        <input type="button" value="Cancel" onClick={CNTInputFields_handleCancel} />
                   </div>
                </form>
            </div>   
        </>
    )
}

export default CreateNTeam
