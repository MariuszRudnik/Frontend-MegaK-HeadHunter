import React, {useEffect, useState} from "react";
import './CoursantInfo.css';

import {ContactInfo} from "./ContactInfo";
import {CvDetails} from "../CvDetails/CvDetails";
import {
    ExpectedContractType,
    ExpectedTypeWork,
    getOneStudentData,
    StudentCVResponse
} from "../../utils/get-one-student-data";
import {useParams} from "react-router-dom";

export const CoursantInfo = () => {
    const [studentData, setStudentData] = useState<StudentCVResponse>({
        hr: null,
        id: "",
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        githubUsername: '',
        bio: '',
        courseCompletion: 0,
        courseEngagment: 0,
        projectDegree: 0,
        teamProjectDegree: 0,
        bonusProjectUrls: [],
        portfolioUrls: [],
        projectUrls: [],
        expectedContractType: ExpectedContractType.IRRELEVANT,
        targetWorkCity: '',
        expectedTypeWork: ExpectedTypeWork.NO_MATTER,
        expectedSalary: '',
        canTakeApprenticeship: false,
        monthsOfCommercialExp: 0,
        education: '',
        workExperience: '',
        courses: ''
    });

    const {id} = useParams();

    useEffect(() => {
        (async () => {
            if (id === undefined) {
                return null;
            } else {
                const student = await getOneStudentData(id);
                setStudentData(student);
            }
        })();
    }, []);

    return <div className="CoursantInfo">
        <ContactInfo student={studentData}/>
        <CvDetails student={studentData}/>
    </div>
}
