import React from 'react'
import TeamInfo from './TeamInfo.component'
import Styles from './Teams.module.css'
const Team = ({UserData}) => {
    return (UserData.map(({isLoggedIn})=>{
        if(true){
            return(
                <div className={Styles.parentCont}>
                    <h1 style={{marginTop:"40px",   marginBottom:"20px" }} >Teams You Own</h1>
                    <TeamInfo teamName="DevOps" members={["Owaise", "Kamran", "Akram", "Arhan", "Aadrish", "Sufyan", "Erum"]} />
                    <TeamInfo teamName="Electric" members={["Sami",  "Farhan", "Majid", "Akram", "Arhan", "Aadrish", "Sufyan", "Erum"]} />
                    <TeamInfo teamName="Scientist" members={["Razzak",  "Raheem"]} />
                    
                    <h1 style={{marginTop:"40px", marginBottom:"20px" }} >Teams You're Part Of</h1>

                    <TeamInfo teamName="Engineer" members={["erum",  "Ibrahim", "Majid", "Akram",  "Ashraf", "Sufyan", "Erum"]} />
                    <TeamInfo teamName="Lab" members={["shafat",  "Sam", "Majid",  "Aadrish", "Sufyan", "Erum"]} />
                    

                </div>
            )
        }else{
            return <h1 key="7978">Chl 1-2 ka 4 ho</h1>
        }
    }))
}

export default Team
