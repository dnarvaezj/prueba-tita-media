import { React, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { HttpRequest } from "../../utils/HttpRequest";
import Card from "./Card";
import './style.css';


const Home = () => {

  const [posts, setPosts] = useState([]);

  const { user } = useContext(AppContext);
  console.log(user);

  const nav = useNavigate();

  const path = 'data/v1/post';

  const { data, loading, error } = HttpRequest(path);

  useEffect(() => {
    if (data !== undefined)
      setPosts(data.data);
  }, [data])

  const logOut = () => {
    localStorage.removeItem('user');
    nav('/login');
  }

  return (
    <div className="containter">
      <div className="head">
        <div className="header-cont">
          <div className="title">
            <h1>PRUEBA TITA MEDIA</h1>
          </div>
          <div className="user-info">
            {/* <p>{user.wt.Ad} | {user.wt.cu}</p> */}

            <div className="dropdown">
              <button className="dropbtn">
                {user.wt.Ad} | {user.wt.cu}
              </button>
              <div className="dropdown-content">
                <a href="#!" onClick={logOut}>Salir</a>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className="cont-home">
        {!loading ? (
          <div className="post-cont">
            {posts?.map((post) => 
              <Card data={post} key={post.id} />
            )}
          </div>
        ): (
          <div className="post-cont">
            <h1>Cargando posts...</h1>
          </div>
        )}
      </div>
    </div>
    
  )
}

export default Home;