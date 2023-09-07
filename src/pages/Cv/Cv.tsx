import React from "react";
import './Cv.css';
import {NavLink} from "react-router-dom";
import {ChevronLeft} from "@styled-icons/boxicons-solid";
import {CoursantInfo} from "../../components/CoursantInfo/CoursantInfo";

export const Cv = () => {
    return <div className="Cv">
        <div className="wrapper">
            <NavLink to="/to-talk" className="goBack"><ChevronLeft size={30} color="#4D4D4D"/>Wróć</NavLink>
            <CoursantInfo/>
        </div>
    </div>
}
