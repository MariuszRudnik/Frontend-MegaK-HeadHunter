import React, {useState} from "react";
import logo from "../../../assets/img/logo.webp";
import {Link} from "react-router-dom";
import {ErrorMessage} from "../ErrorMessage/Message";

export const ForgotPassword = () => {
    const [email, setEmail ] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const resetPassword = ()=>{
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!(email.match(re))){
            setError(true);
            setErrorMessage('Email jest niepoprawny ');
            return;
        }
        console.log(email);
        console.log('ok');
    }

    return(
        <div className="t-login__div">
            <div className="t-login__images">
                <img  className="e-start-logo" src={logo} alt=""/>
            </div>
            <div className="t-forgot-password">
                <h1 className="t-forgot-password__h1">Nie pamietasz hasła ?</h1>
                <p>
                    Tutaj możesz je odzyskać.
                </p>
                <p>
                    Wpisz adres e-mail konta, do którego chcesz odzyskać dostęp
                </p>
            </div>

            <input className="c-input"
                   placeholder="Email"
                   type="email"
                   onChange={e => setEmail(e.target.value)}
            />

            <div className="t-login__alignment">
                <Link to="../"> <button className="c-btn">Anuluj</button></Link>
                <button className="c-btn" onClick={resetPassword}>Przejdź dalej</button>
            </div>

            {error ? <ErrorMessage
                error={error}
                setError={setError}
                message={errorMessage}
            />: null}

        </div>
    )
}