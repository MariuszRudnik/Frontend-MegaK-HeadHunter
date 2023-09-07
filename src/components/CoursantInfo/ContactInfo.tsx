import React from "react";
import './ContactInfo.css';
import {Envelope, Phone} from "@styled-icons/boxicons-solid";
import {Github} from "@styled-icons/boxicons-logos";
import {Button} from "../Button/Button";
import {CvAvatar} from "../Avatar/CvAvatar";
import {StudentCVResponse} from "../../utils/get-one-student-data";
import {handleStudentReservationRelease} from "../../utils/handle-student-reservation-release";
import {handleStudentHiring} from "../../utils/handle-student-hiring";

interface Props {
    student: StudentCVResponse;
}

export const ContactInfo = (props: Props) => {
    const {
        id,
        firstName,
        lastName,
        email,
        tel,
        githubUsername,
        bio,
    } = props.student;

    return <>
        <div className="contactInfo">
            <CvAvatar githubUsername={githubUsername}/>
            <div className="Cv-user">
                <p>{firstName} {lastName}</p>
                <p>
                    <Github size={28}/>{githubUsername}
                </p>
            </div>
            <div className="Cv-contact">
                <p>
                    <Phone size={20} color="#4D4D4D"/><span>{tel}</span>
                </p>
                <p>
                    <Envelope size={20} color="#4D4D4D"/><span>{email}</span>
                </p>
            </div>
            <div className="Cv-about">
                <p>O mnie</p>
                <p>{bio}</p>
            </div>
            <div className="Cv-buttons">
                <Button text="Brak zainteresowania" id={id} click={handleStudentReservationRelease}/>
                <Button text="Zatrudniony" id={id} click={handleStudentHiring}/>
            </div>
        </div>
    </>
}
