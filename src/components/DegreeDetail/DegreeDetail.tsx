import React, {ReactNode} from 'react';
import './DegreeDetail.css';
import {Star} from "@styled-icons/boxicons-solid";

interface Props {
    title: string;
    degree: number;
    children?: ReactNode;
}

export const DegreeDetail = (props: Props) => {
    const redStars = [];
    const greyStars = [];

    for (let i = 0; i < props.degree; i++) {
        redStars.push(<Star size={20} key={i} className="StarRed"></Star>);
    }

    for (let i = 0; i < (5 - props.degree); i++) {
        greyStars.push(<Star size={20} key={i} className="StarGrey"></Star>);
    }

    return <>
        <div className="DegreeDetails">
            <p className="Title">{props.title}</p>
            <p className="DegreeStars">
                <span className="Points">{props.degree}&nbsp;</span> <span className="MaxPoints">/5</span>
                {redStars}
                {greyStars}
            </p>
        </div>
    </>
}
