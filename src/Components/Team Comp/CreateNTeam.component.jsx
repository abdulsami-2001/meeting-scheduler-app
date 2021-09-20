import React from 'react'
import Styles from './CreateNTeam.module.css'
const CreateNTeam = (props) => {
    let {CNTInputFields_handleSubmit,CNTInputFields_handleChange,CNTInputFields,CNTInputFields_handleCancel} = props
    let {TeamName,EmailOfTeamMembers} = CNTInputFields
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
