import React, {useState} from "react";
import {LOGInHost, RecruiterAddPost} from "../../../utils/dictionaries";
import {ErrorMessage} from "../ErrorMessage/Message";
import {Button} from "../../../components/Button/Button";

export const Register = ()=>{
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('hr');
    const [maxReservedStudents, setMaxReservedStudents] = useState(0);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    let action = {actionStatus: " ", message: ""}

    const add = async () =>{
        await fetch(RecruiterAddPost, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                email,
                firstName,
                lastName,
                company,
                maxReservedStudents
            })
        })  .then(response => response.json())
            .then(data => action = data)

        if(!action.actionStatus){
            setError(true);
            setErrorMessage(action.message)
        } else {
            setErrorMessage(action.message)
        }
    }

    return(
        <div className="u-flex  u-flex__column">
            <h1>Panel dodawania HR</h1>
            <input type="text"
                   placeholder="Email"
                   className="c-input c-input--border"
                   onChange={e=> setEmail(e.target.value)}/>
            <input type="text"
                   placeholder="Imie" className="c-input c-input--border"
                   onChange={e=> setFirstName(e.target.value)}/>
            <input type="text"
                   placeholder="Nazwisko" className="c-input c-input--border"
                   onChange={e=> setLastName(e.target.value)}/>

            {/*<select className="c-input c-input--border" onChange={e=> setCompany(e.target.value)}>*/}
            {/*    <option value="hr">HR</option>*/}
            {/*</select>*/}
            <input type="number"
                   placeholder="Liczba zarezerwowanych kursantów "
                   className="c-input c-input--border"
                   min='1'
                   onChange={e => setMaxReservedStudents(Number(e.target.value))}/>
            <button className="Button" onClick={add}>Dodaj</button>

            {error ? <ErrorMessage
                error={error}
                setError={setError}
                message={errorMessage}
            />: null}
        </div>
    )
}