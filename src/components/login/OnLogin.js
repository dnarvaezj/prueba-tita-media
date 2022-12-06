import React from "react";
import { useEffect, useContext } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";


export const OnLogin = () => {

  const { setUser } = useContext(AppContext);

  const nav = useNavigate();

  const clientId = '449004507589-qlhaqhk72q594njls27jlqbropicf1q8.apps.googleusercontent.com';

  useEffect(() => {

    const start = () => {
      gapi.auth2.init({
        clientId
      })
    }

    gapi.load('client:auth2', start);

  }, []);

  const onSuccess = (res) => {
    setUser(res);
    nav('/home');
  }

  const onFailure = (err) => {
    console.log(err);
  }

  return (
    <div className="btn">
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_policy"}
      />
    </div>
  )
}