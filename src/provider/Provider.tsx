import React, {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";


export const Context = createContext<null | string | any >(null);

export const Provider = (props:PropsWithChildren)=>{
    const [login, setLogin] = useState<boolean>(false);
    const [name, setName] = useState<boolean>(false);
    const [lastName, setLastName] = useState<boolean>(false);
    const [role, setRole] = useState<boolean>(false);
    const [data, setData] = useState(
        {
            email: '',
            password: '',
            tel: "0",
            firstName: " ",
            lastName: " ",
            githubUsername: " ",
            portfolioUrls: [{}],
            projectUrls: [{}],
            bio: " ",
            expectedTypeWork: "irrelevant",
            targetWorkCity: "",
            expectedContractType: "irrelevant",
            expectedSalary:  '',
            monthsOfCommercialExp: 0,
            canTakeApprenticeship: false,
            education: "",
            workExperience: ' ',
            courses: " "
        })

    return (
        <Context.Provider value={{
            login, setLogin,
            name, setName,
            lastName, setLastName,
            role, setRole,
            data, setData

        }}>
                {props.children}
        </Context.Provider>
    )
}