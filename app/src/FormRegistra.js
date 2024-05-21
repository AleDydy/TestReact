import { useState } from "react";

export default function FormRegistra(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [risposta, setRisposta] = useState("");

    async function SaveRegister(){
        setRisposta(<><br /><span>Caricamento...</span></>)
        const response = await fetch(`http://localhost:8080/signup`, 
            {  
              method: "POST",
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({"username": "benve", "password": "asdasdasd", "email": "claudio@benve.it"})
            }
        );

        if(response.status == 400){
            setRisposta(<><br /><span className="error">Valori inseriti non validi</span></>)
        }else{
            setRisposta(<><br /><span>Registrazione effettuata con successo!</span></>)
        }
    }


    return(
        <>
            <h3>Form di Registrazione</h3>
            <div>Username: <input type="text"/></div><br />
            <div>Password: <input type="password"/></div><br />
            <div>Email: <input type="email"/></div><br />
            <div><button onClick={signup}>registrati</button></div>
            {risposta}
        </>
    )
}