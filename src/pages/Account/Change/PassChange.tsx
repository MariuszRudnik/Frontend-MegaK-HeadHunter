import React, {useContext, useState} from "react";
import {ErrorMessage} from "../ErrorMessage/Message";
import {LogoutHost, PasswordChange, RegisterActive} from "../../../utils/dictionaries";
import {Context} from "../../../provider/Provider";
import {useNavigate} from "react-router-dom";

export const PassChange = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newSecondPassword, setNewSecondPassword] = useState('')
    const {setLogin ,setRole} = useContext(Context);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const changePassword = async ()=>{

        if(newPassword !== newSecondPassword){
                setError(true);
                setErrorMessage('Nowe hasło musi być takie samo w obydwu polach')
                return;
        }
        const LogOut = async () =>{
            await fetch(LogoutHost, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'},
                credentials: "include",

            })
            setLogin(false);
            setRole(false)
            navigate('/');
        }
        await fetch(PasswordChange, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                oldPassword,
                newPassword
            })

        })
            .then(response => response.json())
            .then(data => {
                setError(true)
                setErrorMessage(data.message)

                if(data.actionStatus === true){
                    LogOut()
                }
            })
    }

    return(
        <div className='AvailableStudents'>
            <div className="u-flex  u-flex__column">
                <h1>Zmiana hasła użytkownika</h1>

                <label>
                    <p>Podaj stare hasło</p>
                    <input type="password"
                           className="c-input c-input--border"
                           onChange={e=>setOldPassword(e.target.value)}
                        />
                </label>
                <label>
                    <p>Podaj nowe hasło</p>
                    <input type="password"
                           placeholder=""
                           className="c-input c-input--border"
                           onChange={e=>setNewPassword(e.target.value)}
                    />
                </label>
                <label>
                    <p>Powtórz nowe hasło</p>
                    <input type="password"
                           className="c-input c-input--border"
                           onChange={e=>setNewSecondPassword(e.target.value)}
                    />
                </label>

                <button className="c-btn" onClick={changePassword} >Zmień</button>

                {error ? <ErrorMessage
                    error={error}
                    setError={setError}
                    message={errorMessage}
                />: null}
            </div>
        </div>
    )
}