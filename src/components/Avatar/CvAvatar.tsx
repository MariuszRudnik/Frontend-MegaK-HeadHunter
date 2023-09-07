import React from 'react';
import './CvAvatar.css';
import {UserCircle} from "@styled-icons/boxicons-solid";

interface Props {
    githubUsername?: string;
}

export const CvAvatar = (props: Props) => {
    if (props.githubUsername) {
        return <img
            src={`https://github.com/${props.githubUsername}.png`}
            alt={`logo / zdjęcie użytkownika ${props.githubUsername}`}
            className="GithubAvatar"
        />
    } else {
        return <UserCircle size={150} className="DefaultAvatar"/>
    }
}
