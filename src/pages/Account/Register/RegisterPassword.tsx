import React, {useState} from "react";
import logo from "../../../assets/img/logo.webp";
import {Link, useNavigate, useParams} from "react-router-dom";
import {ErrorMessage} from "../ErrorMessage/Message";
import {LOGInHost, RegisterActive} from "../../../utils/dictionaries";
import {RegisterStudents} from "./RegisterStudents";

export const RegisterPassword = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const {urlCode, user} = useParams();
    const [secondStep, setSecondStep] = useState(false);

    const navigate = useNavigate();
    let req = {actionStatus: "", message: ''}

    const activeUser = async () =>{
        await fetch(RegisterActive, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                urlCode,
                email,
                password,
            })
        })
            .then(response => response.json())
            .then(data => req = data)

        if(!req.actionStatus){
            setError(true);
            setErrorMessage(req.message);
        }
        else {
            if (user === 'recruiter'){
                navigate('/');
            } else if (user === 'student'){
                setSecondStep(true);
            } else {
                navigate('/');
            }
        }
    }

    const register = ()=>{

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!(email.match(re))){
            setError(true);
            setErrorMessage('Email jest niepoprawny ');
            return;
        }
        if(!(password === passwordCheck)){
            setError(true);
            setErrorMessage('Podane hasło musi być takie same. ');
            return;
        }
        else {
            activeUser();
            return;
        }
    }

    return(
        <div className="t-login">
        <div className="t-login__div">
            <div className="t-login__images">
                <img  className="e-start-logo" src={logo} alt=""/>
            </div>
            {secondStep? null: <div className="register__form">
                <div className="register__h1">
                    <h1>Zarejestruj się</h1>
                </div>
                <input className="c-input"
                       placeholder="Email"
                       type="email"
                       onChange={e=>setEmail(e.target.value)}
                       />
                <input className="c-input"
                       placeholder="Hasło"
                       type="password"
                       onChange={e=>setPassword(e.target.value)}
                       />
                <input  className="c-input"
                        placeholder="Powtórz hasło"
                        type="password"
                        onChange={e=>setPasswordCheck(e.target.value)}
                        />
            </div>}
            {secondStep? null:<div className="t-login__alignment">
                <Link to="../"> <button className="c-btn">Anuluj</button></Link>
                <button className="c-btn" onClick={register}>Zarejestruj się</button>
            </div>}

            {secondStep? <RegisterStudents password={password} email={email}/>:null}

                {error ? <ErrorMessage
                    error={error}
                    setError={setError}
                    message={errorMessage}
                />: null}

            </div>
        </div>
    )
}