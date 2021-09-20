import React from 'react'
import Styles from './TeamInfo.module.css'

const TeamInfo = (props) => {
    let {teamName = "Dummy Team" ,members} = props
    return (
        <div className={Styles.parentCont}>
            <h3>{teamName}</h3>
            <br />
            <b>Members: </b>  
            {(members) ? ((members.length > 2) ?  (<span>{members[0]}, {members[1]} & {(members.length) - 2} others</span> ) : (<span>{members[0]} & {members[1]}</span> ))  : ( <span>No members</span> )}
        </div>
    )
}

export default TeamInfo
