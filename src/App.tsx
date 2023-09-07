import React, {useContext, useEffect} from 'react';
import './App.css';
import {Routing} from "./components/Routing/Routing";
import {Context} from "./provider/Provider";
import {CheckLogin} from "./utils/dictionaries";
import {Header} from "./components/Header/Header";

function App() {

    const {login, setLogin, name, setName, lastName, setLastName, setRole , role} = useContext(Context)
    useEffect(()=> {
        const logIn = async ()=>{

            await fetch(CheckLogin, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                credentials: "include",
            })
                .then(response => response.json())
                .then(data => {
                    if (data.logedIn) {
                        setLogin(true)
                        setName(data.message.firstName)
                        setLastName(data.message.lastName)
                        setRole(data.message.role)
                    }
                })
        }
        logIn()
    })

    return (
        <div className="App">
            {login ? <Header/> : null}

            <Routing login={login}/>
        </div>
    );
}

export default App;
