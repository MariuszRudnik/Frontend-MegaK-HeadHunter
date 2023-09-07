import React, {Dispatch, SetStateAction, useContext} from "react";



interface MessageProps {
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>
    message : string
    color?: string;
}

export const ErrorMessage = (Props:MessageProps) => {

    const close = () =>{
        Props.setError(false);
        console.log(Props.error)
    }



    return(
        <div id="message" className="t-login__message" style={{backgroundColor: Props.color}}>
            {Props.message}
            <span className="t-login__closebtn" onClick={close} >&times;</span>
        </div>
    )
}