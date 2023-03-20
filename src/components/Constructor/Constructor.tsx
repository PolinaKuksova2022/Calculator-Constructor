import React from 'react';
import '../Style/main.scss';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { TElement } from '../Field/Field';

export interface ConstructorProps {
    isConstructEnable: boolean,
    constructElements:  TElement[],
    setConstructElements: React.Dispatch<React.SetStateAction<TElement[]>>,
}

export const Constructor = ({ isConstructEnable, constructElements, setConstructElements } : ConstructorProps) => {
    return <>
        { isConstructEnable ? 
            <div className='constructor-panel'>
            { constructElements.map((i, index) => 
                    <Draggable 
                        draggableId={i.id.toString()} 
                        key={i.id} 
                        index={index}
                        isDragDisabled={false}
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
            ''
        }
    </>;
}