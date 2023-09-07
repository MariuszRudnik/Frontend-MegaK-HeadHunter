import React, {Dispatch, SetStateAction} from "react";
import {FilterAlt} from "@styled-icons/boxicons-solid";
import './Tools.css';

interface ToolsProps {
    filter: Dispatch<SetStateAction<boolean>>
}

export const Tools = (props: ToolsProps) => (

    <div className="Tools">
        <input type="search" placeholder="Szukaj"/>
        <button onClick={() => props.filter(true)}><FilterAlt size={15} color="#4D4D4D"/>Filtrowanie</button>
    </div>
)