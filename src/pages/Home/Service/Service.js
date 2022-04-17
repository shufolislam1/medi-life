import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-info'>
            <div className='service-design'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <h2>{price}</h2>
                <button onClick={() =>navigateToServiceDetail(id)} className='btn btn-primary'>Details</button>
            </div>
        </div>
    );
};

export default Service;