import React from "react";
import './ProjectOneLink.css';
import {Paperclip} from "@styled-icons/boxicons-regular";

interface Props {
    link: string;
}

export const ProjectOneLink = (props: Props) => {
    return <div className="project-links">
        <a
            href={props.link}
            className="projectUrl"
            title="otwarcie w nowym oknie"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Paperclip className="clip"/>
            {props.link}
        </a>
    </div>
}
