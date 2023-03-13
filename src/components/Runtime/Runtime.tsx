import React, { useState } from 'react';
import '../Style/main.scss';
import Img from '../../assets/Img/img.svg'

export const Runtime = () => {
    return <div className='runtime-panel'>
        <div className="runtime-description">
            <img src={Img} alt="icon" />
            <p>Перетащите сюда</p>
            <p>любой элемент из левой панели</p>
        </div>
    </div>;
}