import React,{useState} from 'react'
import TeamInfo from './TeamInfo.component'
import Styles from './Teams.module.css'
import CreateNTeam from './CreateNTeam.component'

const Team = (props) => {
    let [ShowModal,setShowModal] = useState(false)
    let {UserData,CNTInputFields_handleSubmit,CNTInputFields_handleChange,CNTInputFields} = props

    const CNTInputFields_handleCancel = () =>{
        setShowModal(false)
    }

    return (UserData.map(({isLoggedIn})=>{
        if(true){
            return(
                <div className={Styles.parentCont}>
                    <h1 style={{marginTop:"40px",   marginBottom:"20px" }} >Teams You Own</h1>                    
                    <TeamInfo teamName="Lab" members={["Bishra",  "Sam", "Majid", "Sufyan", "Erum"]} />
                    <TeamInfo teamName="Escape" members={["Maheen",  "Sam Said!", "Majid", "Aadrish", "Sufyan", "Erum"]} />
                    <TeamInfo teamName="Escape" members={["Maheen",  "Sam Said!", "Majid", "Aadrish", "Sufyan", "Erum"]} />
                    <TeamInfo teamName="Escape" members={["Maheen",  "Sam Said!", "Majid", "Aadrish", "Sufyan", "Erum"]} />
                    <h1 style={{marginTop:"40px", marginBottom:"20px" }} >Teams You're Part Of</h1>
                    <TeamInfo teamName="Flurt" members={["Laiba Iqbal",  "Sam", "Majid","razak", "Aadrish", "Sufyan", "Erum"]} />
                    <TeamInfo teamName="Flurt" members={["Laiba Iqbal",  "Sam", "Majid","razak", "Aadrish", "Sufyan", "Erum"]} />
                    <TeamInfo teamName="Flurt" members={["Laiba Iqbal",  "Sam", "Majid","razak", "Aadrish", "Sufyan", "Erum"]} />
                    <TeamInfo teamName="Flurt" members={["Laiba Iqbal",  "Sam", "Majid","razak", "Aadrish", "Sufyan", "Erum"]} />
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
            return <h1 key="7978">Chl 1-2 ka 4 ho</h1>
        }
    }))
}

export default Team
