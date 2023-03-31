import React from 'react';
import './Card.css';

const Card = ({myData}) => {

const {title, body, id} = myData;

    return (

        <div className="card">
            <div className="card-info">
                <p className='card-id'>{id}</p>
                <p className='card-text'>{body.substr(0, 150)}</p>
                <h2 className='card-text'>{title.substr(0, 15)}</h2>
            </div>
        </div>
  )
}
export default Card;