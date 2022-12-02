import { React, useContext } from "react";
import { AppContext, ContextProvider } from "../../context/AppContext";
import { Container, Row, Col, Alert } from "react-bootstrap";
import './style.css';


const Home = () => {

  const contextValue = AppContext(ContextProvider);
  console.log(contextValue);

  return (
    <Container>
      <div className="cont">
        <div className="login-cont">
          <h4>Home</h4>
        </div>
      
      </div>
    </Container>
  )
}

export default Home;