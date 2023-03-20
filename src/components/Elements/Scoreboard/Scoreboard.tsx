import React from 'react';
import '../../Style/main.scss';
import { TElementsMode } from '../TElementMode';

export const Scoreboard = ({ mode }: TElementsMode) => {
    return <div
            className='scoreboard'>
        <div className="scoreboard__inner">
            <div className="scoreboard__count">0</div>
        </div>
    </div>;
}