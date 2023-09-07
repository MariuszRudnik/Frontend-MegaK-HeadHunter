import React, {useContext, useEffect, useState} from "react";
import * as buffer from "buffer";
import {Link} from "react-router-dom";
import {LOGInHost, StudentRegisterHost} from "../../../utils/dictionaries";
import { useNavigate } from "react-router-dom";
import {ErrorMessage} from "../ErrorMessage/Message";
import {Context} from "../../../provider/Provider";
import {StepOneRegister} from "./student/StepOneRegister";
import {StepSecondRegister} from "./student/StepSecondRegister";
import {StepThirdRegister} from "./student/StepThirdRegister";


type Props = {
    password:string;
    email:string;
}

let stepNumber:number = 1;



export const RegisterStudents = ({password, email}:Props)=>{
    const navigation = useNavigate();
    const [step, setStep] = useState(1);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const {data, setData} = useContext(Context);
    useEffect(()=>{
        setData({...data, email, password})
    },[])


    const switchWrapper = ()=>{
        switch (step){
            case 1: return (<>
                <StepOneRegister/>
                </>)
            case 2: return (<>
                <StepSecondRegister/>
            </>)
            case 3: return (<>
                <StepThirdRegister/>
            </>)
        }
    }
    const next = () =>{
        {setError(false)}
        if(stepNumber === 1 ){
            const re = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
            if(!(data.tel.match(re))){
                setError(true);
                setErrorMessage('Podany numer telefonu jest nieprawidłowy.');
                setStep(1);
                return
            }
            else {
                stepNumber = 2
            }
        }
        if(step === 2){
            const reHub = (/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){1,38}$/i)
            if(!(data.githubUsername.match(reHub))){
                setError(true);
                setErrorMessage('Podana nazwa GitHub jest nieprawidłowa.');
                stepNumber = 2;
                return
            }

        }
        stepNumber++;
        setStep(step+1)
        if(step === 3){
            send()
        }

    }
    const prev = () =>{
        setStep(step-1)
        stepNumber = stepNumber -1
        if(stepNumber <= 0){
            stepNumber = 1
        }
        console.log('step: '+ stepNumber)
        if (step === 1){
            setStep(1)
        }

    }
    const send = async ()=>{
        console.log(data)
        const {email,password,tel,
            firstName, lastName,
            githubUsername,portfolioUrls,
            projectUrls, bio,
            expectedTypeWork , expectedContractType,
            monthsOfCommercialExp, education,
            workExperience, courses } = data;
        await fetch(StudentRegisterHost, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                email,
                password,
                tel,
                firstName,
                lastName,
                githubUsername,
                portfolioUrls,
                projectUrls,
                bio,
                expectedTypeWork,
                expectedContractType,
                monthsOfCommercialExp,
                education,
                workExperience,
                courses
            })
        })  .then(response => response.json())
            .then(data =>{
                if(data.actionStatus === true){
                    navigation('/')
                }
                else {
                    stepNumber = 1;
                    setStep(1);
                    setError(true);
                    setErrorMessage(data.message)
                }
                console.log(data)
            })
    }


    return(
     <div className="register__wrapper">
         <h1>Uzupełni dane swojego konta w 3 krokach </h1>
         <h1>[{step}/3]</h1>

         <div>
             <form className="register__form">
             {switchWrapper()}
             </form>

             <div className="register__wrapper-button">
                 <button className="Button" onClick={prev}>Wstecz</button>
                 <button className="Button" onClick={next}>Dalej</button>
             </div>
             <Link to="/">Uzupełnie później</Link>
         </div>
         {error ? <ErrorMessage
             error={error}
             setError={setError}
             message={errorMessage}
         />: null}

     </div>
    )
}