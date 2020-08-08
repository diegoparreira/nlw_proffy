import React from 'react';

import whatsappIcon from "../../../assets/images/icons/whatsapp.svg";

import './styles.css';


function TeacherListItem(){
    return (
        <article className="teacher-item">
        <header>
          <img
            src="https://pbs.twimg.com/profile_images/1273698307253166080/8grYndIg_400x400.jpg"
            alt="Diego Parreira"
          />
          <div>
            <strong>Nome do professor</strong>
            <span>Matéria</span>
          </div>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
          <br />
          <br />
          nobis placeat corporis cum dicta enim sapiente fugiat nihil corrupti
          aliquam nisi necessitatibus iusto tempore autem dignissimos.
          Reiciendis porro architecto voluptatum.
        </p>

        <footer>
          <p>
            Preço/Hora
            <strong>R$ 80,00</strong>
          </p>
          <button>
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    )
}

export default TeacherListItem;