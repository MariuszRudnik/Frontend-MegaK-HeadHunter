import React, {useState} from "react";
import {ChevronLeft, ChevronRight, DownArrow} from "@styled-icons/boxicons-solid";
import './Pagination.css';


export const Pagination = () => {

    const [select, setSelect] = useState(false);
    const [number, setNumber] = useState(10)

    window.onclick = () => setSelect(false);

    return (
        <div className="Pagination">
            <div className="Pagination__select">
                <p>Ilość elementów</p>
                <div className="select">
                    <p className="baseOption" onMouseEnter={() => setSelect(true)}><span>{number}</span><DownArrow
                        size={10}/></p>
                    <div className={select ? 'options active' : 'options'}>
                        <p className="option"
                           onClick={() => setNumber(number === 10 ? 20 : 10 || number === 50 ? 10 : 20)}>
                            <span>{number === 10 ? 20 : 10}</span></p>
                        <p className="option" onClick={() => setNumber(number === 50 ? 20 : 50)}>
                            <span>{number === 50 ? 20 : 50}</span></p>
                    </div>
                </div>
            </div>
            <div className="Pagination__prevNext">
                <p>10 z 90</p>
                <button className="btn"><ChevronLeft size={20}/></button>
                <button className="btn active"><ChevronRight size={20}/></button>
            </div>
        </div>
    )
}