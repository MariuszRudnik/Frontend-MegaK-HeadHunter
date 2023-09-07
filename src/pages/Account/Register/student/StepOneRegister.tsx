import React, {useContext} from "react";
import {Context} from "../../../../provider/Provider";

export const StepOneRegister= ()=>{
    const {data, setData} = useContext(Context);
    return(
        <>
                <input className="c-input"
                       placeholder="Telefon"
                       type="tel"
                       onChange={e => setData({...data,tel: e.target.value  })}
                /><input className="c-input"
                         placeholder="Imię"
                         type="text"
                         onChange={e => setData({...data,firstName: e.target.value})}
            /><input className="c-input"
                     placeholder="Nazwisko"
                     type="text"
                     onChange={e => setData({...data, lastName: e.target.value  })}
            />
        </>
    )
}