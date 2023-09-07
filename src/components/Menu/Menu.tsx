import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import './Menu.css';

export const Menu = () => {

    const [underlineOne, setUnderlineOne] = useState(window.location.href !== 'http://localhost:3000/to-talk')
    const [underlineTwo, setUnderlineTwo] = useState(window.location.href === 'http://localhost:3000/to-talk')


    return (
        <div className="Menu">
            <NavLink to='/' className="Menu__link" onClick={() => {
                setUnderlineOne(true)
                setUnderlineTwo(false)
            }}>
                <div className="underline"
                     style={underlineOne ? {left: 0, transition: '.4s'} : {left: '100%', transition: '.4s'}}></div>
                Dostępni kursanci</NavLink>
            <NavLink to='/to-talk' className="Menu__link" onClick={() => {
                setUnderlineOne(false)
                setUnderlineTwo(true)
            }}>
                <div className="underline"
                     style={underlineTwo ? {left: 0, transition: '.4s'} : {left: '-100%', transition: '.4s'}}></div>
                Do rozmowy</NavLink>
        </div>
    )

}