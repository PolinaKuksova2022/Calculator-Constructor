import React, { useState } from 'react';
import '../Style/main.scss';
import { Button } from '../Button/Button';

export const Mode = () => {
    const [isRuntime, setIsRuntime] = useState(false);
    const [isConstructor, setIsConstructor] = useState(true);
    const toggleClass = () => {
        setIsRuntime(!isRuntime);
        setIsConstructor(!isConstructor);
    };
    
    return <div className='mode'>
        <Button type={isRuntime ? "btn btn-mode runtime" : "btn btn-mode runtime no-active" } onClick={toggleClass}>Runtime</Button>
        <Button type={isConstructor ? "btn  btn-mode constructor" : "btn btn-mode constructor no-active" } onClick={toggleClass}>Constructor</Button>
    </div>;
}
