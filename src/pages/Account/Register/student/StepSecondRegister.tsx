import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../../provider/Provider";

type AddItem = {
    id:number;
    name: string
}
type Portfolio = {
    id: number;
    portfolio:string;
}
let counter = 0;



export const StepSecondRegister = ()=>{
    const {data, setData} = useContext(Context);
    const [arrayPortfolioUrl, setArrayPortfolioUrl] = useState<Portfolio[]>([]);
    const [arrayProjectUrl, setArrayProjectUrl] = useState<AddItem[]>([ ]);
    const [textPortfolioUrl, setTextPortfolioUrl] = useState(" ");
    const [textProjectUrl, setTextProjectUrl ] = useState('');

    const add = (array: Portfolio)=>{



    }

    const addPortfolioUr = (e:React.FormEvent)=> {
        e.preventDefault();
        const array:Portfolio = {
            id: counter,
            portfolio:textPortfolioUrl
        }
        arrayPortfolioUrl.push(array);
        setData({...data, portfolioUrls: arrayPortfolioUrl});
        setTextPortfolioUrl('')
        counter++;
    }
    function removePortfolio(id:React.FormEvent | any) {
        let array = arrayPortfolioUrl.filter(data => data.id !== id);
        console.log(array)
        setArrayPortfolioUrl(array);
        setData({...data, projectUrls: array})
    }
    const addProjectUrl = (e:React.FormEvent) => {
        e.preventDefault();
        const array:AddItem = {
            id: counter,
            name:textProjectUrl
        }
        counter++;
        arrayProjectUrl.push(array);
        setData({...data, projectUrls: arrayProjectUrl})
        setTextProjectUrl('')
    }
    const  removeProject = (id:React.FormEvent | any)=> {
        let array = arrayProjectUrl.filter(data => data.id !== id);
        setArrayProjectUrl(array);
        console.log(array)
        setData({...data, projectUrls: array})
    }

    return(
        <>
            <div>
                <input className="c-input"
                       placeholder="Nazwa GitHub"
                       type="text"
                       onChange={e => setData({...data,githubUsername: e.target.value  })}
                />
            </div>
            <div>
                <input className="c-input c-input__array"
                       placeholder="Link do portfolio"
                       type="tel"
                       onChange={e => setTextPortfolioUrl(e.target.value)}
                       value={textPortfolioUrl}
                />
                <button className="Button" onClick={addPortfolioUr}>Dodaj</button>
            </div>
            <p>Doddane do listy portfolio:</p>
            <ul className="e-addList">{
                arrayPortfolioUrl.map(
                    array => <li  key={array.id}>
                        <p className="e-addList__wrap">{array.portfolio}</p>
                        <p className="e-addList__remove" onClick={()=>removePortfolio(array.id)}>Usuń</p>
                    </li>
                )}
            </ul>
            <div>
                <input className="c-input  c-input__array"
                       placeholder="Link do projetów"
                       type="text"
                       value={textProjectUrl}
                       onChange={e => setTextProjectUrl(e.target.value)}
                />
                <button className="Button" onClick={addProjectUrl}>Dodaj</button>
            </div>
            <p>Doddano do listy projektów:</p>
            <ul className="e-addList">{
                arrayProjectUrl.map(
                    array => <li key={array.id} >
                        <p className="e-addList__wrap">{array.name}</p>
                        <p className="e-addList__remove" onClick={()=>removeProject(array.id)}>Usuń</p>
                    </li>
                )}
            </ul>
            <textarea className="c-input c-input__bio"
                      placeholder="Bio"
                      onChange={e => setData({...data,bio: e.target.value  })}
            />
        </>
    )
}