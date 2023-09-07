import React, {Dispatch, SetStateAction, useState} from 'react';
import './Filter.css';
import {DownArrow, UpArrow} from "@styled-icons/boxicons-solid";
import {Button} from "../Button/Button";
import {Rating} from "./Rating/Rating";
import {SelectedRating} from "./Stars/Stars";

interface FilterProps {
    filter: Dispatch<SetStateAction<boolean>>
    showFiltered: (obj: Filtered) => void
    setActiveFilter: Dispatch<SetStateAction<boolean>>
}

export interface Filtered {
    ratingCourse: SelectedRating | {}
    ratingActiveInCourse: SelectedRating | {}
    ratingCode: SelectedRating | {}
    ratingScrum: SelectedRating | {}
    placeWork: SelectedPlace
    contractType: SelectedContract
    salaryPrice: SalaryPrice
    freeWork: string
    commercialExp: number
}

interface SelectedPlace {
    remoteWork: boolean
    officeWork: boolean
}

interface SelectedContract {
    contractOfEmployment: boolean
    b2b: boolean
    contractOfMandate: boolean
    contractWork: boolean
}

interface SalaryPrice {
    from: string | number
    to: string | number
}

export const Filter = (props: FilterProps) => {

    const [chooseFilter, setChooseFilter] = useState<Filtered>({
        ratingCourse: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingActiveInCourse: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingCode: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingScrum: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        placeWork: {
            remoteWork: false,
            officeWork: false,
        },
        contractType: {
            contractOfEmployment: false,
            b2b: false,
            contractOfMandate: false,
            contractWork: false,
        },
        salaryPrice: {
            from: '',
            to: '',
        },
        freeWork: '',
        commercialExp: 0,
    })

    const setRating = (obj: SelectedRating, name: string) => {
        if (name === 'ratingCourse') {
            setChooseFilter({...chooseFilter, ratingCourse: obj})
        } else if (name === 'ratingActiveInCourse') {
            setChooseFilter({...chooseFilter, ratingActiveInCourse: obj})
        } else if (name === 'ratingCode') {
            setChooseFilter({...chooseFilter, ratingCode: obj})
        } else if (name === 'ratingScrum') {
            setChooseFilter({...chooseFilter, ratingScrum: obj})
        }
    }

    const clearAll = () => {
        setChooseFilter({
            ratingCourse: {
                fiveStar: false,
                fourStar: false,
                threeStar: false,
                twoStar: false,
                oneStar: false
            },
            ratingActiveInCourse: {
                fiveStar: false,
                fourStar: false,
                threeStar: false,
                twoStar: false,
                oneStar: false
            },
            ratingCode: {
                fiveStar: false,
                fourStar: false,
                threeStar: false,
                twoStar: false,
                oneStar: false
            },
            ratingScrum: {
                fiveStar: false,
                fourStar: false,
                threeStar: false,
                twoStar: false,
                oneStar: false
            },
            placeWork: {
                remoteWork: false,
                officeWork: false,
            },
            contractType: {
                contractOfEmployment: false,
                b2b: false,
                contractOfMandate: false,
                contractWork: false,
            },
            salaryPrice: {
                from: '',
                to: '',
            },
            freeWork: '',
            commercialExp: 0,
        })
    }

    function todo() {

    }

    return (
        <>
            <div className="filter-bg" onClick={() => props.filter(false)}></div>
            <div className="Filter">
                <div className="Filter-header">
                    <h4>Filtrowanie</h4>
                    <button className="Filter-clearAll" onClick={clearAll}>Wyczyść wszystkie</button>
                </div>
                <div className="Filter-ratings">
                    <Rating title="Ocena przejścia kursu" rating={setRating} name="ratingCourse"/>
                    <Rating title="Ocena aktywności i zaangażowania na kursie" rating={setRating}
                            name="ratingActiveInCourse"/>
                    <Rating title="Ocena kodu w projekcie własnym" rating={setRating} name="ratingCode"/>
                    <Rating title="Ocena pracy w zespole w Scrum" rating={setRating} name="ratingScrum"/>
                </div>

                <div className="Filter-place">
                    <p>Preferowane miejsce pracy</p>
                    <div className="Filter-select">
                        <p className={chooseFilter.placeWork.remoteWork ? "active" : ""}
                           onClick={() => setChooseFilter({
                               ...chooseFilter,
                               placeWork: {...chooseFilter.placeWork, remoteWork: !chooseFilter.placeWork.remoteWork}
                           })}>Praca zdalna</p>
                        <p className={chooseFilter.placeWork.officeWork ? "active" : ""}
                           onClick={() => setChooseFilter({
                               ...chooseFilter,
                               placeWork: {...chooseFilter.placeWork, officeWork: !chooseFilter.placeWork.officeWork}
                           })}>Praca w biurze</p>
                    </div>
                </div>

                <div className="Filter-contract">
                    <p>Oczekiwany typ kontraktu</p>
                    <div className="Filter-select">
                        <p className={chooseFilter.contractType.contractOfEmployment ? "active" : ""}
                           onClick={() => setChooseFilter({
                               ...chooseFilter,
                               contractType: {
                                   ...chooseFilter.contractType,
                                   contractOfEmployment: !chooseFilter.contractType.contractOfEmployment
                               }
                           })}>Umowa o pracę</p>
                        <p className={chooseFilter.contractType.b2b ? "active" : ""}
                           onClick={() => setChooseFilter({
                               ...chooseFilter,
                               contractType: {...chooseFilter.contractType, b2b: !chooseFilter.contractType.b2b}
                           })}>B2B</p>
                        <p className={chooseFilter.contractType.contractOfMandate ? "active" : ""}
                           onClick={() => setChooseFilter({
                               ...chooseFilter,
                               contractType: {
                                   ...chooseFilter.contractType,
                                   contractOfMandate: !chooseFilter.contractType.contractOfMandate
                               }
                           })}>Umowa zlecenie</p>
                        <p className={chooseFilter.contractType.contractWork ? "active" : ""}
                           onClick={() => setChooseFilter({
                               ...chooseFilter,
                               contractType: {
                                   ...chooseFilter.contractType,
                                   contractWork: !chooseFilter.contractType.contractWork
                               }
                           })}>Umowa o dzieło</p>
                    </div>
                </div>

                <div className="Filter-price">
                    <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                    <div className="Filter-inputs">
                        <div className="Filter-input">
                            <label>Od</label>
                            <input type="text" placeholder="np. 1000 zł" value={chooseFilter.salaryPrice.from}
                                   onChange={(e) => setChooseFilter({
                                       ...chooseFilter,
                                       salaryPrice: {...chooseFilter.salaryPrice, from: Number(e.target.value)}
                                   })}/>
                        </div>
                        <div className="Filter-input">
                            <label>Do</label>
                            <input type="text" placeholder="np. 10000 zł" value={chooseFilter.salaryPrice.to}
                                   onChange={(e) => setChooseFilter({
                                       ...chooseFilter,
                                       salaryPrice: {...chooseFilter.salaryPrice, to: Number(e.target.value)}
                                   })}/>
                        </div>
                    </div>
                </div>

                <div className="Filter-free">
                    <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                    <div className="Filter-radio">
                        <input type="radio" name="free" id="yes"
                               onClick={() => setChooseFilter({...chooseFilter, freeWork: 'tak'})}/> <label
                        htmlFor="yes">Tak</label>
                    </div>
                    <div className="Filter-radio">
                        <input type="radio" name="free" id="no"
                               onClick={() => setChooseFilter({...chooseFilter, freeWork: 'nie'})}/> <label
                        htmlFor="no">Nie</label>
                    </div>
                </div>

                <div className="Filter-exp">
                    <p>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</p>
                    <div className="Filter-month">
                        <p style={chooseFilter.commercialExp > 0 ? {color: '#F7F7F7'} : {}}>{chooseFilter.commercialExp} miesięcy</p>
                        <div>
                            <UpArrow size={10} color="#7E7E7E" className="Filter-arrow" onClick={() => setChooseFilter({
                                ...chooseFilter,
                                commercialExp: chooseFilter.commercialExp + 1
                            })}/>
                            <DownArrow size={10} color="#7E7E7E" className="Filter-arrow"
                                       onClick={() => setChooseFilter({
                                           ...chooseFilter,
                                           commercialExp: chooseFilter.commercialExp === 0 ? 0 : chooseFilter.commercialExp - 1
                                       })}/>
                        </div>
                    </div>
                </div>

                <div className="Filter-buttons">
                    <p className="Filter-cancel" onClick={() => props.filter(false)}>Anuluj</p>
                    <div onClick={() => {
                        props.showFiltered(chooseFilter)
                        props.setActiveFilter(true)
                    }}><Button text='Pokaż wyniki' id="todo" click={todo}/></div>
                </div>

            </div>
        </>
    )
}
