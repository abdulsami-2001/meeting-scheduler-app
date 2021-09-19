import React from 'react'

const Team = ({UserData}) => {
    return (UserData.map(({isLoggedIn})=>{
        if(isLoggedIn){
            return <h1 key="4856" >Bhai Londa Login ha</h1>
        }else{
            return <h1 key="7978">Chl 1-2 ka 4 ho</h1>
        }
    }))
}

export default Team
