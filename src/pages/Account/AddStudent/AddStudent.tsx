import React, {useState} from "react";
import {LOGInHost, StudentAddHost} from "../../../utils/dictionaries";
import {ErrorMessage} from "../ErrorMessage/Message";
import * as url from "url";
// import {Simulate} from "react-dom/test-utils";
// import change = Simulate.change;

export const AddStudent =()=>{
    const [file, setFile] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setMessage] = useState('');
    const [colorMessage, setColorMessage] = useState('#E02735');

    const onSubmitButton = async (e:any) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            await fetch(StudentAddHost, {
                method: 'POST',
                credentials: "include",
                body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.actionStatus === false ){
                        setError(true);
                        setMessage(data.message);
                    }
                    else {
                        setError(true);
                        setMessage(data.message);
                    }
                })
            }
            catch (err){
                setColorMessage('#E02735');
            }
    }
    const change = (e:any)=>{
        setFile(e.target.files[0])
    }

    return(
        <div className="t-addFile">
            <h1>Panel dodawania studantów</h1>
            <p>Dodaj plik w formacie JSON aby wczytać studentów.</p>

            <form onSubmit={onSubmitButton} className="t-addFile">
                <label className="t-addFile__btn">
                    <input className="t-addFile__btn"
                           type="file"
                           accept=".application/activity+json, .json"
                           onChange={change}/>
                    Wybierz plik
                </label>
                <input className="t-addFile__btn" type="submit"/>
            </form>

            {error ? <ErrorMessage
                error={error}
                setError={setError}
                message={errorMessage}
                color={colorMessage}
            />: null}
        </div>
    )
}