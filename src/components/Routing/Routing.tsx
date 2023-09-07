import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import {AvailableStudents} from "../../pages/AvailableStudents/AvailableStudents";
import {Login} from "../../pages/Account/Login";
import {ToTalk} from "../../pages/ToTalk/ToTalk";
import {Cv} from "../../pages/Cv/Cv";
import {Admin} from "../../pages/Account/Admin";
import {RegisterPassword} from "../../pages/Account/Register/RegisterPassword";
import {PassChange} from "../../pages/Account/Change/PassChange";
import {Context} from "../../provider/Provider";
import {NoPermission} from "../../pages/Account/NoPermission/NoPermission";

import {EmailChange} from "../../pages/Account/Change/EmailChange";
import {Menu} from "../Menu/Menu";



export interface LoginProps {
    login: boolean
}


export const Routing = ({login}: LoginProps) => {
    const {role} = useContext(Context);
    let accessAdmin = false;
    if(role === "admin"){
        accessAdmin = true
    }
    else {
        console.log('ddd')
    }
    const RoleHome = ()=>{
        if (role === "admin"){return(<Admin/>)}
        else if (role === 'recruiter'){return (<><Menu/><AvailableStudents/></>)}
        else {return (Login())}
    }

    return (
        <Routes>

            <Route path='/*' element={RoleHome()}/>
            <Route path='/to-talk' element={login ? <><Menu/><ToTalk/></> : <Login/>}/>

            <Route path='/cv/:id' element={login ? <Cv/> : <Login/>}/>
            {/*<Route path='/admin' element={accessAdmin ? <Admin/> : <NoPermission/>}/>*/}
            <Route path='/passchange' element={login ? <PassChange/>: <NoPermission/>}/>
            <Route path='/emailchange' element={login ? <EmailChange/>: <NoPermission/>}/>
            {/*<Route path='/register/add-student/' element={<RegisterStudents/>}/>*/}
            <Route path='/register/:user/:urlCode' element={<RegisterPassword/>}/>
            {/*<Route path='/register/recruiter/:urlCode' element={<RegisterPassword/>}/>*/}
        </Routes>
    )
}
