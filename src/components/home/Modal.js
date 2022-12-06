import React, { useEffect, useRef, useState } from "react";

export const Modal = ({modalIsOpen, setModalIsOpen, comments}) => {

  const modal = useRef(null);
  
  useEffect(() => {
    if (modalIsOpen) {
      modal.current.style.display = 'block';
    } else {
      modal.current.style.display = 'none';
    }
  }, [modalIsOpen])

  return (
    <div id="myModal" className="modal" ref={modal}>
      <div className="modal-con modal-comments">
        <div className="modal-header">
          <span className="close-modal" onClick={() => setModalIsOpen(false)}>&times;</span>
        </div>
        <div className="modal-body">
          {comments.total > 0 ? comments.data.map((comment) => (
            <div className="comment" key={comment.id}>
                <div className="autor">
                  <img className="post-image-profile" src={comment.owner.picture}></img> 
                  <b className="comment-owner">{comment.owner.firstName} {comment.owner.lastName}</b> 
                  <p>{comment.message}</p>
                </div>
            </div>
          )): ''}
        </div>
      </div>

    </div>
  )
}