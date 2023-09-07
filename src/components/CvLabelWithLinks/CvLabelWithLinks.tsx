import React from 'react';
import './CvLabelWithLinks.css';
import {ProjectOneLink} from "../ProjectOneLink/ProjectOneLink";

interface Props {
    urlList: string[] | null;
    title: string;
}

export const CvLabelWithLinks = (props: Props) => {
    return <>
        <p className="LabelTitle">{props.title}</p>
        <div className="CvLabelWithLinks">

            {
                ((props.urlList === null) || (props.urlList.length === 0)) ?
                    <p>Osoba nie posiada strony www z portfolio.</p> : props.urlList.map((element, index) => {
                        return <ProjectOneLink link={element} key={index}/>
                    })
            }
        </div>
    </>
    // }
}
