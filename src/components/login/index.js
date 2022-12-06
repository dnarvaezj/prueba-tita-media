import { React, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import './style.css';
import { OnLogin } from "./OnLogin";


const Login = () => {

  return (
    <div className="cont">
      <div className="login-cont">
        <h2>PRUEBA TITA MEDIA</h2>
        <div className="login-button">
          <OnLogin />
        </div>
      </div>
    </div>
  )
}

export default Login;