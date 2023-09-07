import React, {useContext, useState} from "react";
import {ErrorMessage} from "../ErrorMessage/Message";
import {EmailChangeHost, RegisterActive} from "../../../utils/dictionaries";
import {useNavigate} from "react-router-dom";
import {Context} from "../../../provider/Provider";

export const EmailChange = ()=>{

    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setMessage] = useState('');
    const [colorMessage, setColorMessage] = useState('#E02735');
    const navigate = useNavigate();
    const {setLogin ,setRole} = useContext(Context);

    const changeEmail = async ()=>{
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!(newEmail.match(re)) ){
            setError(true);
            setMessage('Email jest niepoprawny ');
            return;
        }
        await fetch( EmailChangeHost, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                newEmail,
                password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.actionStatus === false){
                    setError(true);
                    setMessage(data.message);
                    setColorMessage('#E02735');
                }
                else {
                    setError(true);
                    setMessage(data.message);
                    setColorMessage('green');
                }


            })

    }

    return(
        <>
            <div className='AvailableStudents'>
                <div className="u-flex  u-flex__column">
                    <h1>Zmiana email</h1>
                    <label>
                        <p>Podaj nowy Emial</p>
                        <input type="email"
                               className="c-input c-input--border"
                               onChange={e => setNewEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Podaj hasło aby zmienić email</p>
                        <input type="password"
                               className="c-input c-input--border"
                               onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <button className="c-btn" onClick={changeEmail}  >Zmień</button>

                    {error ? <ErrorMessage
                        error={error}
                        setError={setError}
                        message={errorMessage}
                        color={colorMessage}
                    />: null}
                </div>
            </div>
        </>
    )
}