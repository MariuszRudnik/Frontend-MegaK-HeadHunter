import React from 'react';
import './CvDetails.css';
import {CvLabel} from "../CvLabel/CvLabel";
import {DegreeDetail} from "../DegreeDetail/DegreeDetail";
import {ExpectationDetail} from "../ExpectationDetail/ExpectationDetail";
import {CvLabelWithLinks} from "../CvLabelWithLinks/CvLabelWithLinks";
import {getOneStudentData, StudentCVResponse} from "../../utils/get-one-student-data";

interface Props {
    student: StudentCVResponse;
}

export const CvDetails = (props: Props) => {
    const {
        courseCompletion,
        courseEngagment,
        projectDegree,
        teamProjectDegree,
        bonusProjectUrls,
        portfolioUrls,
        projectUrls,
        expectedContractType,
        targetWorkCity,
        expectedTypeWork,
        expectedSalary,
        canTakeApprenticeship,
        monthsOfCommercialExp,
        education,
        workExperience,
        courses,
    } = props.student;

    return <>
        <section className="CvDetails">
            <CvLabel title="Oceny">
                <div className="Degree">
                    <DegreeDetail title="Ocena przejścia kursu" degree={courseCompletion}/>
                    <DegreeDetail title="Ocena aktywności i zaangażowania na kursie"
                                  degree={courseEngagment}/>
                    <DegreeDetail title="Ocena kodu w projekcie własnym" degree={projectDegree}/>
                    <DegreeDetail title="Ocena pracy w zespole w Scrum" degree={teamProjectDegree}/>
                </div>
            </CvLabel>
            <CvLabel title="Oczekiwanie w stosunku do zatrudnienia">
                <div className="WorkExpectation">
                    <ExpectationDetail
                        title="Preferowane miejsce pracy">{expectedTypeWork}</ExpectationDetail>
                    <ExpectationDetail
                        title="Docelowe miasto, gdzie chce pracować kandydat">{targetWorkCity}</ExpectationDetail>
                    <ExpectationDetail
                        title="Oczekiwany typ kontraktu">{expectedContractType}</ExpectationDetail>
                    <ExpectationDetail
                        title="Oczekiwane wynagrodzenie miesięczne netto">{expectedSalary} zł</ExpectationDetail>
                    <ExpectationDetail
                        title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">{canTakeApprenticeship ? 'TAK' : 'NIE'}</ExpectationDetail>
                    <ExpectationDetail
                        title="Komercyjne doświadczenie w programowaniu">{monthsOfCommercialExp} miesięcy</ExpectationDetail>
                </div>
            </CvLabel>
            <CvLabel title="Edukacja">
                <p>{education}</p>
            </CvLabel>
            <CvLabel title="Kursy">
                <p>{courses}</p>
            </CvLabel>
            <CvLabel title="Doświadczenie zawodowe">
                <p>{workExperience}</p>
            </CvLabel>
            <CvLabelWithLinks
                title="Portfolio"
                urlList={portfolioUrls}
            />
            <CvLabelWithLinks
                title="Projekt w zespole Scrumowym"
                urlList={bonusProjectUrls}
            />
            <CvLabelWithLinks
                title="Projekt na zaliczenie"
                urlList={projectUrls}
            />
        </section>
    </>
}
