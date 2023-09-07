import React, {useEffect, useState} from "react";
import {users} from "../../temporary/students";
import {Button} from "../Button/Button";
import {ChevronDown} from "@styled-icons/boxicons-solid";
import './Student.css';
import {Avatar} from "../Avatar/Avatar";
import {NavLink} from "react-router-dom";
import {Filtered} from "../Filter/Filter";

interface StudentProps {
    filtered: Filtered
    activeFilter: boolean
}

interface Student {
    canTakeApprenticeship: boolean
    courseCompletion: number
    courseEngagment: number
    expectedContractType: string
    expectedSalary: string
    expectedTypeWork: string
    firstName: string
    id: string
    lastName: string
    monthsOfCommercialExp: number
    projectDegree: number
    targetWorkCity: string
    teamProjectDegree: number
}

function todo() {

}

export const Student = ({filtered, activeFilter}: StudentProps) => {

    const [show, setShow] = useState<boolean | null | number>(false)
    const [students, setStudents] = useState<Student[]>([])
    const [talkStudents, setTalkStudents] = useState<Student[]>([])

    const getFreeStudents = async () => {
        const res = await fetch('http://localhost:3001/student/freelist', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
        });
        const data = await res.json()
        setStudents(await data.data);
    }

    const getTalkStudent = async () => {
        const res = await fetch('http://localhost:3001/student/selected', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
        });
        const data = await res.json()
        setTalkStudents(data.message)
    }

    useEffect(() => {
        getFreeStudents()
        getTalkStudent()
    }, [])

    const toggle = (index: number) => {
        if (show === index) {
            return setShow(null)
        }
        setShow(index)
    }

    const setFiltered = () => {
        const commercialExp = filtered.commercialExp

        const contractType: string[] = [];

        [{...filtered.contractType}].forEach(contract => {
            if (contract.b2b) contractType.push('B2B')
            if (contract.contractOfEmployment) contractType.push('Umowa o pracę')
            if (contract.contractOfMandate) contractType.push('Umowa zlecenie')
            if (contract.contractWork) contractType.push('Umowa o dzieło')
        })
        const freeWork = filtered.freeWork

        const placeWorking: string[] = [];
        if (filtered.placeWork.officeWork) placeWorking.push('Biuro')
        if (filtered.placeWork.remoteWork) placeWorking.push('Praca zdalna')

        const ratingActiveInCourse: number[] = [];
        [{...filtered.ratingActiveInCourse}].forEach(rating => {
            if (rating.fiveStar) ratingActiveInCourse.push(5)
            if (rating.fourStar) ratingActiveInCourse.push(4)
            if (rating.threeStar) ratingActiveInCourse.push(3)
            if (rating.twoStar) ratingActiveInCourse.push(2)
            if (rating.oneStar) ratingActiveInCourse.push(1)
        })

        const ratingCode: number[] = [];
        [{...filtered.ratingCode}].forEach(rating => {
            if (rating.fiveStar) ratingCode.push(5)
            if (rating.fourStar) ratingCode.push(4)
            if (rating.threeStar) ratingCode.push(3)
            if (rating.twoStar) ratingCode.push(2)
            if (rating.oneStar) ratingCode.push(1)
        })

        const ratingCourse: number[] = [];
        [{...filtered.ratingCourse}].forEach(rating => {
            if (rating.fiveStar) ratingCourse.push(5)
            if (rating.fourStar) ratingCourse.push(4)
            if (rating.threeStar) ratingCourse.push(3)
            if (rating.twoStar) ratingCourse.push(2)
            if (rating.oneStar) ratingCourse.push(1)
        })

        const ratingScrum: any[] = [];
        [{...filtered.ratingScrum}].forEach(rating => {
            if (rating.fiveStar) ratingScrum.push(5)
            if (rating.fourStar) ratingScrum.push(4)
            if (rating.threeStar) ratingScrum.push(3)
            if (rating.twoStar) ratingScrum.push(2)
            if (rating.oneStar) ratingScrum.push(1)
        })

        const salaryPrice: any[] = []
        if (filtered.salaryPrice.from) salaryPrice.push(filtered.salaryPrice.from)
        else salaryPrice.push(0)
        if (filtered.salaryPrice.to) salaryPrice.push(filtered.salaryPrice.to)

        return {
            commercialExp,
            contractType,
            freeWork,
            placeWorking,
            ratingActiveInCourse,
            ratingCode,
            ratingCourse,
            ratingScrum,
            salaryPrice,
        }
    }

    const handleAddToTalkStudent = async(id: string) => {
        await fetch(`http://localhost:3001/recruiter/addstudent/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.actionStatus)
            })

    }

    const handleRemoveStudentFromTalk = async (id: string) => {
        await fetch(`http://localhost:3001/recruiter/pushback/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.actionStatus)
            })

    }

    const checkUrl = () => {
        if (window.location.href === "http://localhost:3000/") {
            return (
                !activeFilter ?
                    students
                        .filter((user: any) => !user.reservationStatus)
                        .map((user: Student, index: number) => (
                            <div className="Student">
                                <div className="oneStudent" key={user.id}>
                                    <div className="studentName"
                                         onClick={() => toggle(index)}>
                                        <p>{user.firstName} {user.lastName.split('')[0]}.</p>
                                    </div>
                                    <div className="studentButtons">
                                        <Button text='Zarezerwuj rozmowę' click={handleAddToTalkStudent} id={user.id}/>
                                        <ChevronDown onClick={() => toggle(index)} size={30} color="#666666"
                                                     style={show === index ? {
                                                         transform: 'rotateX(180deg)',
                                                         transition: '0.4s'
                                                     } : {
                                                         transition: '0.4s',
                                                         transform: 'rotateX(0deg'
                                                     }}
                                        />
                                    </div>

                                </div>
                                <div className="oneStudent__desc"
                                     style={show === index ? {transition: '0.4s', height: '110px'} : {
                                         transition: '0.4s',
                                         height: '0px'
                                     }}>
                                    <div className="oneStudent__desc--item">
                                        <p>Ocena przejścia kursu</p>
                                        <p><strong>{user.courseCompletion}</strong>/5</p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Ocena aktywności i zaangażowania na kursie</p>
                                        <p><strong>{user.courseEngagment}</strong>/5</p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Ocena kodu w projekcie własnym</p>
                                        <p><strong>{user.projectDegree}</strong>/5</p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Ocena pracy w zespole Scrum</p>
                                        <p><strong>{user.teamProjectDegree}</strong>/5</p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Preferowane miejsce pracy</p>
                                        <p><strong>{user.expectedTypeWork}</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Docelowe miasto, gdzie chce pracować kandydat</p>
                                        <p><strong>{user.targetWorkCity}</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Oczekiwany typ kontraktu</p>
                                        <p><strong>{user.expectedContractType}</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                                        <p><strong>{user.expectedSalary} zł</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                                        <p><strong>{user.canTakeApprenticeship}</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Komercyjne doświadczenie w programowaniu</p>
                                        <p><strong>{user.monthsOfCommercialExp}</strong></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    :
                    users
                        .filter(user => !user.reservationStatus)
                        .filter(user => user.monthsOfCommercialExp >= setFiltered().commercialExp)
                        .filter(user => (user.expectedSalary >= setFiltered().salaryPrice[0] && (setFiltered().salaryPrice[1] ? user.expectedSalary <= setFiltered().salaryPrice[1] : user.expectedSalary >= setFiltered().salaryPrice[0])) || ((setFiltered().salaryPrice[0] ? user.expectedSalary >= setFiltered().salaryPrice[0] : user.expectedSalary <= setFiltered().salaryPrice[1]) && user.expectedSalary <= setFiltered().salaryPrice[1]))
                        .filter(user => setFiltered().contractType.length !== 0 ? setFiltered().contractType.includes(user.expectedContractType) : !setFiltered().contractType.includes(user.expectedContractType))
                        .filter(user => setFiltered().freeWork ? setFiltered().freeWork === user.canTakeApprenticeship : !(setFiltered().freeWork === user.canTakeApprenticeship))
                        .filter(user => (setFiltered().placeWorking.length ? setFiltered().placeWorking.includes(user.expectedTypeWork) : !setFiltered().placeWorking.includes(user.expectedTypeWork)))
                        .filter(user => setFiltered().ratingActiveInCourse.length !== 0 ? setFiltered().ratingActiveInCourse.includes(user.courseEngagment) : !setFiltered().ratingActiveInCourse.includes(user.courseEngagment))
                        .filter(user => setFiltered().ratingCode.length !== 0 ? setFiltered().ratingCode.includes(user.projectDegree) : !setFiltered().ratingCode.includes(user.projectDegree))
                        .filter(user => setFiltered().ratingCourse.length !== 0 ? setFiltered().ratingCourse.includes(user.courseCompletion) : !setFiltered().ratingCourse.includes(user.courseCompletion))
                        .filter(user => setFiltered().ratingScrum.length !== 0 ? setFiltered().ratingScrum.includes(user.teamProjectDegree) : !setFiltered().ratingScrum.includes(user.teamProjectDegree))

                        .map((user, index) => (
                            <div className="Student">
                                <div className="oneStudent" key={user.id}>
                                    <div className="studentName"
                                         onClick={() => toggle(index)}>
                                        <p>{user.firstName} {user.lastName.split('')[0]}.</p>
                                    </div>
                                    <div className="studentButtons">
                                        <Button text='Zarezerwuj rozmowę' click={handleAddToTalkStudent} id={user.id}/>
                                        <ChevronDown onClick={() => toggle(index)} size={30} color="#666666"
                                                     style={show === index ? {
                                                         transform: 'rotateX(180deg)',
                                                         transition: '0.4s'
                                                     } : {
                                                         transition: '0.4s',
                                                         transform: 'rotateX(0deg'
                                                     }}
                                        />
                                    </div>

                                </div>
                                <div className="oneStudent__desc"
                                     style={show === index ? {transition: '0.4s', height: '110px'} : {
                                         transition: '0.4s',
                                         height: '0px'
                                     }}>
                                    <div className="oneStudent__desc--item">
                                        <p>Ocena przejścia kursu</p>
                                        <p><strong>{user.courseCompletion}</strong>/5</p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Ocena aktywności i zaangażowania na kursie</p>
                                        <p><strong>{user.courseEngagment}</strong>/5</p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Ocena kodu w projekcie własnym</p>
                                        <p><strong>{user.projectDegree}</strong>/5</p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Ocena pracy w zespole Scrum</p>
                                        <p><strong>{user.teamProjectDegree}</strong>/5</p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Preferowane miejsce pracy</p>
                                        <p><strong>{user.expectedTypeWork}</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Docelowe miasto, gdzie chce pracować kandydat</p>
                                        <p><strong>{user.targetWorkCity}</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Oczekiwany typ kontraktu</p>
                                        <p><strong>{user.expectedContractType}</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                                        <p><strong>{user.expectedSalary} zł</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                                        <p><strong>{user.canTakeApprenticeship}</strong></p>
                                    </div>
                                    <div className="oneStudent__desc--item">
                                        <p>Komercyjne doświadczenie w programowaniu</p>
                                        <p><strong>{user.monthsOfCommercialExp}</strong></p>
                                    </div>
                                </div>
                            </div>
                        ))

            )
        } else if (window.location.href === "http://localhost:3000/to-talk") {
            return (
                talkStudents
                    .filter((user: any) => user.reservationStatus)
                    .map((user: Student, index) => (
                        <div className="Student">
                            <div className="oneStudent" key={user.id}>
                                <div className="studentName" onClick={() => toggle(index)}>
                                    <div className="reservation">
                                        <span>Rezerwacja do</span>
                                        <span>23.07.2022 r</span>
                                    </div>
                                    <div>
                                        <Avatar/>
                                        <p>{user.firstName} {user.lastName}</p>
                                    </div>
                                </div>
                                <div className="studentButtons">
                                    <NavLink to={`/cv/${user.id}`}><Button text='Pokaż CV' id={user.id}
                                                                           click={todo}/></NavLink>
                                    <Button text='Brak zainteresowania' id={user.id} click={handleRemoveStudentFromTalk}/>
                                    <Button text='Zatrudniony' id={user.id} click={todo}/>
                                    <ChevronDown onClick={() => toggle(index)} size={30} color="#666666"
                                                 style={show === index ? {
                                                     transform: 'rotateX(180deg)',
                                                     transition: '0.4s'
                                                 } : {
                                                     transition: '0.4s',
                                                     transform: 'rotateX(0deg'
                                                 }}/>
                                </div>

                            </div>
                            <div className="oneStudent__desc"
                                 style={show === index ? {transition: '0.4s', height: '110px'} : {
                                     transition: '0.4s',
                                     height: '0px'
                                 }}>
                                <div className="oneStudent__desc--item">
                                    <p>Ocena przejścia kursu</p>
                                    <p><strong>{user.courseCompletion}</strong>/5</p>
                                </div>
                                <div className="oneStudent__desc--item">
                                    <p>Ocena aktywności i zaangażowania na kursie</p>
                                    <p><strong>{user.courseEngagment}</strong>/5</p>
                                </div>
                                <div className="oneStudent__desc--item">
                                    <p>Ocena kodu w projekcie własnym</p>
                                    <p><strong>{user.projectDegree}</strong>/5</p>
                                </div>
                                <div className="oneStudent__desc--item">
                                    <p>Ocena pracy w zespole Scrum</p>
                                    <p><strong>{user.teamProjectDegree}</strong>/5</p>
                                </div>
                                <div className="oneStudent__desc--item">
                                    <p>Preferowane miejsce pracy</p>
                                    <p><strong>{user.expectedTypeWork}</strong></p>
                                </div>
                                <div className="oneStudent__desc--item">
                                    <p>Docelowe miasto, gdzie chce pracować kandydat</p>
                                    <p><strong>{user.targetWorkCity}</strong></p>
                                </div>
                                <div className="oneStudent__desc--item">
                                    <p>Oczekiwany typ kontraktu</p>
                                    <p><strong>{user.expectedContractType}</strong></p>
                                </div>
                                <div className="oneStudent__desc--item">
                                    <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                                    <p><strong>{user.expectedSalary} zł</strong></p>
                                </div>
                                <div className="oneStudent__desc--item">
                                    <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                                    <p><strong>{user.canTakeApprenticeship}</strong></p>
                                </div>
                                <div className="oneStudent__desc--item">
                                    <p>Komercyjne doświadczenie w programowaniu</p>
                                    <p><strong>{user.monthsOfCommercialExp}</strong></p>
                                </div>
                            </div>
                        </div>
                    ))
            )
        }
    }

    return (
        <>
            {checkUrl()}
        </>
    )
}
