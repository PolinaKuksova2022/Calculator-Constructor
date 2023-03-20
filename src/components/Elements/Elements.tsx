import React from 'react';
import { Scoreboard } from './Scoreboard/Scoreboard';
import { Toolbar } from './Toolbar/Toolbar';
import { Numbers } from './Numbers/Numbers';
import { Equals } from './Equals/Equals';
import { Draggable } from 'react-beautiful-dnd';
import '../Style/main.scss';


export interface TElement{
    id: number;
    name: JSX.Element;
}

