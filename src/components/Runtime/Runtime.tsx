import React, { useState } from 'react';
import '../Style/main.scss';
import Img from '../../assets/Img/img.svg'
import { Draggable } from 'react-beautiful-dnd';
import { TElement } from '../Field/Field';
export interface RuntimeProps {
    isRuntimeEnable: boolean,
    runtimeElements: TElement[],
    setRuntimeElements:  React.Dispatch<React.SetStateAction<TElement[]>>,
}
export const Runtime = ({ isRuntimeEnable, runtimeElements, setRuntimeElements } : RuntimeProps) => {
    // const isDragDisabledScoreboard = runtimeElements.filter(x => x.id == 1);
    // console.log(isDragDisabledScoreboard);
    return <>
        { runtimeElements.length ?
            <div className='constructor-panel'>
                {runtimeElements.map((i, index) => 
                    <Draggable 
                        draggableId={i.id.toString()} 
                        key={i.id} 
                        index={index}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                {i.name}
                            </div>
                        )}
                    </Draggable>
                )}
            </div>
        :
            <div className='runtime-panel'>
                <div className="runtime-description">
                    <img src={Img} alt="icon" />
                    <p>Перетащите сюда</p>
                    <p>любой элемент из левой панели</p>
                </div>
            </div>
        }
    </>;
}