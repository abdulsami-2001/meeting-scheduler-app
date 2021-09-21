import React,{useState} from 'react'
import Styles1 from './TeamInfo.module.css'
import Styles from './Teams.module.css'
import CreateNTeam from './CreateNTeam.component'


const TeamInfo = (props) => {
    let {CNTInputFields_handleSubmit,CNTInputFields_handleChange,CNTInputFields} = props;
    let [ShowModal,setShowModal] = useState(false)
    const CNTInputFields_handleCancel = () =>{
        setShowModal(false)
    }

    if(props.UserTeams === undefined){

        return(
            <div className={Styles.parentCont}>
                <h1>No Team Found!</h1>
                <div className={Styles.createTeamCont}>
                    <span className={Styles.showCNT} >Create New Team</span>
                    <button onClick={()=>{setShowModal(true)}} className={Styles.btn}>+</button>
                </div>
                <div className={ ShowModal ?  Styles.CNTModal : Styles.CNTModalHide }>
                    <CreateNTeam CNTInputFields_handleCancel={CNTInputFields_handleCancel} CNTInputFields_handleSubmit={CNTInputFields_handleSubmit} CNTInputFields_handleChange={CNTInputFields_handleChange} CNTInputFields={CNTInputFields}/>
                </div>
            </div>
        )
    }else{
        return <h2>oo hoo</h2>
    }
    
    
}

export default TeamInfo


/*
return (
    <div className={Styles1.parentCont}>
        <h3>{teamName}</h3>
        <br />
        <b>Members: </b>  
        {(members) ? ((members.length > 2) ?  (<span>{members[0]}, {members[1]} & {(members.length) - 2} others</span> ) : (<span>{members[0]} & {members[1]}</span> ))  : ( <span>No members</span> )}
    </div>
) */