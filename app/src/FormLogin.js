import { useState } from "react";

export default function FormLogin(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [risposta, setRisposta] = useState("");

    async function SaveLogin(){
        setRisposta(<><br /><span>Caricamento...</span></>)
        const response = await fetch(`http://localhost:8080/login`, 
            {  
              method: "POST",
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({"username": "benve", "password": "asdasdasd"})
            }
        );
        
        let resp = response.json();
        
        if(resp == null){
            setRisposta(<><br /><span className="error">Valori inseriti invalidi</span></>)
        }else{
            setRisposta(resp);
        }
    }

    function gestisciCambioUsername(e){
        setUsername(e.target.value);
    }
    function gestisciCambioPassword(e){
        setPassword(e.target.value);
    }

    <div className="formLogin">
        <div>Username: <input type="text" onChange={gestisciCambioUsername}></input></div>
        <div>Password: <input type="password" onChange={gestisciCambioPassword}></input></div> 
        <br></br>
        <div><button>Login</button></div>
    </div>

    return(
        <>
            <h3>Form di Login</h3>
            <div>Username: <input type="text" onChange={gestisciCambioUsername}/></div><br />
            <div>Password: <input type="password" onChange={gestisciCambioPassword}/></div><br />
            <br></br>
            <div><button onClick={login}>Login</button></div>
            {risposta}
        </>

    )
}