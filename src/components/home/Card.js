import { React, useEffect, useState } from "react";
import { HttpRequest } from "../../utils/HttpRequest";
import { Modal } from "./Modal.js";
import { UserModal } from "./UserModal";

const Card = (postData, key) => {

  const [path, setPath] = useState('');
  const [comments, setComments] = useState(true);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);

  useEffect(() => {
    if (path === '') {
      setPath(`data/v1/post/${postData.data.id}/comment`);
    }
  }, [postData])
  
  const { data, loading, error } = HttpRequest(path);

  useEffect(() => {
    if (data !== undefined)
    setComments(data);
  }, [data])
  
  let post = postData.data;
  return (
    <div className="card" key={key}>
      <img className="post-image" src={post.image}></img>
      <div className="card-cont">
        <div className="autor" onClick={() => setModalIsOpen1(true)}>
          <img className="post-image-profile" src={post.owner.picture}></img>
          <p>{post.owner.firstName} {post.owner.lastName}</p>
        </div>
        <div className="likes">
          <p>❤ <b>{post.likes}</b></p>
        </div>
        <div className="text">
          <p>{post.text}</p>
        </div>
        <div className="tags">
          {post.tags.length > 0 ? post.tags?.map((tag) => 
            <a href="#!" key={tag}>{tag} </a>
          ): ''}
        </div>
        <div className="comments">
          {comments.total > 0 ? (
              <a href="#!" onClick={() => setModalIsOpen(true)}>{comments.total} {comments.total > 1 ? 'comentarios' : 'comentario'}</a>
            ) : (
              <p>Sin comentarios</p>
            )
          }
        </div>
        <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} comments={comments} />
        <UserModal modalIsOpen1={modalIsOpen1} setModalIsOpen1={setModalIsOpen1} userData={post.owner} />
      </div>
    </div>
  )
}

export default Card;