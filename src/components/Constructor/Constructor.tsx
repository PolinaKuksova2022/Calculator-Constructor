import React, { useState } from 'react';
import '../Style/main.scss';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { Toolbar } from '../Toolbar/Toolbar';
import { Numbers } from '../Numbers/Numbers';
import { Equals } from '../Equals/Equals';

export const Constructor = () => {
    return <div className='constructor-panel'>
        <Scoreboard/>
        <Toolbar/>
        <Numbers/>
        <Equals/>
    </div>;
}