import React from "react";
import {Register} from "../Register/Register";

export const NoPermission = ()=>{
    return(
    <div>
        <div className='AvailableStudents'>
           <p>`Nie masz uprawnień do przeglądania tej strony` </p>
        </div>
    </div>
    )
}