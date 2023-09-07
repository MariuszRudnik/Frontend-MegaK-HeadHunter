import React from "react";
import {Register} from "./Register/Register";
import {AddStudent} from "./AddStudent/AddStudent";
import {Link, NavLink, Route, Routes} from "react-router-dom";

export const Admin = () => {

    return(
        <>
        <section>
            <div className='AvailableStudents u-dar'>
                <div >
                    <NavLink to="/add" className="c-btn__link">Dodawanie hr</NavLink>
                    <NavLink to="addStudents" className="c-btn__link" >Dodawanie studentów</NavLink>
                </div>

                <Routes>
                    <Route path='/' element={<Register/>}/>
                    <Route path='/add' element={<Register/>}/>
                    <Route path='/addStudents' element={<AddStudent/>}/>
                </Routes>
            </div>
        </section>

        </>
    )
}