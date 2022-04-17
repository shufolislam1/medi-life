import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service-info'>
            <div className='service-design container-fluid'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <h2>{price}</h2>
            </div>
        </div>
    );
};

export default Service;