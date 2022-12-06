import React, { useEffect, useRef, useState } from "react";
import { HttpRequest } from "../../utils/HttpRequest";

export const UserModal = ({modalIsOpen1, setModalIsOpen1, userData}) => {

  const [path, setPath] = useState('');
  const [user, setUser] = useState(true);

  const modal = useRef(null);
  
  useEffect(() => {
    if (modalIsOpen1) {
      modal.current.style.display = 'block';
    } else {
      modal.current.style.display = 'none';
    }
  }, [modalIsOpen1])

  useEffect(() => {
    if (path === '') {
      setPath(`data/v1/user/${userData.id}`);
    }
  }, [userData])
  
  const { data, loading, error } = HttpRequest(path);

  useEffect(() => {
    if (data !== undefined)
    setUser(data);
  }, [data])

  return (
    <div id="myModal" className="modal" ref={modal}>
      <div className="modal-con modal-comments">
        <div className="modal-header">
          <span className="close-modal" onClick={() => setModalIsOpen1(false)}>&times;</span>
        </div>
        <div className="modal-body">
          <div className="autor-data">
            <div className="autor">
              <img className="autor-image-profile" src={userData.picture}></img>
              <b className="autor-name">{userData.firstName} {userData.lastName}</b>
            </div>
            <div className="user-data">
              <p><b>Email: </b>{user.email}</p>
              <p><b>Teléfono: </b>{user.phone}</p>
              <p><b>Genero: </b>{user.gender}</p>
              <p><b>Direccion: </b>{user.location?.street}, {user.location?.city}, {user.location?.country}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}