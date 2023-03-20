import React, { useState } from 'react';
import '../Style/main.scss';
import { Button } from '../Button/Button';

export interface ModeSelectorProps {
    onChangeMode: (mode : ModeType) => void;
    mode: ModeType,
}
export enum ModeType{
    Runtime,
    Construct
}

export const ModeSelector = ({onChangeMode, mode}:ModeSelectorProps) => {
    const isRuntime = mode == ModeType.Runtime;
    const toggleClass = () => {
        onChangeMode(isRuntime ? ModeType.Construct : ModeType.Runtime);
    };
    
    return <div className='mode'>
        <Button type={isRuntime ? "btn btn-mode runtime" : "btn btn-mode runtime no-active" } onClick={toggleClass}>Runtime</Button>
        <Button type={!isRuntime ? "btn  btn-mode constructor" : "btn btn-mode constructor no-active" } onClick={toggleClass}>Constructor</Button>
    </div>;
}

