import React, { useEffect, useState } from "react";
import '../Post/Post.css';
import ImagemUsuario from '../../assets/images/sistema/imgDefault.png';
import api from '../Axios';


function Post(props) {

    return (
      <>
        <div className="post-container">
          <img className="post-imagem" src={ImagemUsuario} alt="" />
          <h5 className="post-nome">AAAAAAAAAAA</h5>
          <h6 className="post-usuario">aaaaaaaaaaaa</h6>
          <div className="post-corpo"></div>
          <div className="post-container-btn">
              <button className="post-btn">Curtir</button>
              <button className="post-btn">Comentar</button>
              <button className="post-btn">Compartilhar</button>
          </div>
        </div>
        
      </>
    );
  }
  
  export default Post;