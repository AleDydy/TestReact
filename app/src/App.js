import logo from './logo.svg';
import './App.css';
import FormLogin from './FormLogin'
import FormRegistra from "./FormRegistra"
import {useState, useEffect} from 'react'


function App() {

  const [login, setLogin] = useState(false);
  const [register, setRegistra] = useState(false);
  const [token, setToken] = useState("");


  async function registraUtente(){
    const response = await fetch("http://localhost:8080/signup", {method: "GET"});
    const array = await response.json();
    setRegistra(true);
  }


  return (
    <div className="App">
      

        <br />
          
         { login ?
          <>
          <div><FormLogin/></div>
          <button onClick={() => setLogin(false)}>Annullato</button>
          </>
          :
          <button onClick={() => setLogin(true)}>OK</button>
      }

      <hr />

      { register ?
        <>
          <div><FormRegistra/></div><br />
          <button onClick={() => setRegistra(false)}>Annullato</button>
        </>
        :
        <button onClick={() => setRegistra(true)}>OK</button>
      }
      
    </div>
  );
}

export default App;