import React, {useContext} from "react";
import {Context} from "../../../../provider/Provider";

export const StepThirdRegister = ()=>{
    const {data, setData} = useContext(Context);
    return(
        <>

            <p>Oczekiwany typ pracy:</p>
            <select className="c-input" defaultValue="irrelevant" onChange={e=> setData({
                ...data,
                expectedTypeWork: e.target.value
            })}>
                <option value="atLocation" >Na miejscu</option>
                <option value="changeoflocation">Możliwość zmiany miejsca zamieszkania</option>
                <option value="manual">Zdalnie</option>
                <option value="irrelevant">Bez znaczenia</option>
            </select>
            <input className="c-input"
                   placeholder="Miasto pracy"
                   type="tel"
                   onChange={e => setData({...data, targetWorkCity: e.target.value  })}
            />
            <p>Rodzaj umowy:</p>
            <select className="c-input" defaultValue="irrelevant"
                    onChange={e=> setData({
                        ...data,
                        expectedContractType: e.target.value
                    })}
            >
                <option value="UoP">Umowa o prace</option>
                <option value="B2B">B2B</option>
                <option value="UZ/UoD">Umowa o prace/ Umowa o dzieło</option>
                <option  value="irrelevant">Bez znaczenia</option>
            </select>

            <input className="c-input"
                   placeholder="Oczekiwana pensja"
                   onChange={e => setData({...data, expectedSalary: (e.target.value) })}
            />
            <p>Możliwośc odbycia stażu</p>
            <select className="c-input" defaultValue="false"
                    onChange={e=> setData({
                        ...data,
                        canTakeApprenticeship: Boolean(e.target.value)
                    })}
            >
                <option value="true">Tak</option>
                <option  value="false">Nie</option>
            </select>

            <input className="c-input"
                   placeholder="Czas pracy komercyjnej"
                   type="number"
                   onChange={e => setData({...data, monthsOfCommercialExp: Number(e.target.value)  })}
            />
            <textarea className="c-input c-input__bio"
                      placeholder="Edukacja"
                      onChange={e => setData({...data,education: e.target.value  })}
            />
            <textarea className="c-input c-input__bio"
                      placeholder="Doświadczenie zawodowe"
                      onChange={e => setData({...data,workExperience: e.target.value  })}
            />
            <textarea className="c-input c-input__maxWidth"
                      placeholder="Kursy"
                      onChange={e => setData({...data,courses: e.target.value  })}
            />
        </>
    )
}