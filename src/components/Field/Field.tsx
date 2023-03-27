import React, { ReactElement, useEffect, useState } from 'react';
import '../Style/main.scss';
import { ModeSelector, ModeType } from '../ModeSelector/ModeSelector';
import { Constructor } from '../Constructor/Constructor';
import { Runtime } from '../Runtime/Runtime';
import { DragDropContext, DropResult, Droppable  } from 'react-beautiful-dnd';
import { Scoreboard } from '../Elements/Scoreboard/Scoreboard';
import { Toolbar } from '../Elements/Toolbar/Toolbar';
import { Numbers } from '../Elements/Numbers/Numbers';
import { Equals } from '../Elements/Equals/Equals';
import { CalcProvider } from '../../CalcProvider/CalcProvider';

export interface TElement{
    id: number;
    name: JSX.Element;
}

export const Field = () => {

    const [mode, setMode] = useState<ModeType>(ModeType.Construct);

    const  elements: TElement[] = [
        {id: 1, name: <Scoreboard key={1} mode={mode}/>}, 
        {id: 2, name:<Toolbar key={2} mode={mode}/>}, 
        {id: 3, name:<Numbers key={3} mode={mode}/>}, 
        {id: 4, name:<Equals key={4} mode={mode}/>}
    ]
    console.log('in field', mode);
    const [constructElements, setConstructElements] = useState<TElement[]>(elements);
    const [runtimeElements, setRuntimeElements] = useState<TElement[]>([]);

    useEffect(() => {
        const newEl = runtimeElements.map<TElement>(({id, name}) => {
            return {id, name: React.cloneElement(name, {mode})}
        });
        setRuntimeElements(newEl);
    }, [mode])

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;
    
        if (!destination) {
          return;
        }

        // dnd from constructor to runtime
        if (source.droppableId === "constructor" 
            && destination.droppableId === "runtime") {
                constructElements[source.index].id == 1 
                ? runtimeElements.splice(0, 0, constructElements[source.index])
                : destination.index == 0 && runtimeElements.at(0)?.id == 1
                    ? runtimeElements.splice(destination.index + 1, 0, constructElements[source.index])
                    : runtimeElements.splice(destination.index, 0, constructElements[source.index]);
            // remove moving element from constructElements
            constructElements.splice(source.index, 1);
            setRuntimeElements(runtimeElements);
            setConstructElements(constructElements);
        }

        //dnd from runtime to runtime
        if (source.droppableId === "runtime" 
            && destination.droppableId === "runtime"
            //  move into place Scoreboard Disabled
            && runtimeElements[source.index].id !== 1
            && runtimeElements[destination.index].id !== 1
            ) {
            const [reorderedItem] = runtimeElements.splice(source.index, 1);
            runtimeElements.splice(destination.index, 0, reorderedItem);
            setRuntimeElements(runtimeElements);
        }

      };

      
    return <div className='field'>
        <ModeSelector onChangeMode={(mode) => setMode(mode)} mode={mode}/>
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="field__panel">
                <Droppable droppableId="constructor">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : '$main-color' }}
                            {...provided.droppableProps}
                        >
                            <Constructor isConstructEnable={mode == ModeType.Construct} constructElements={constructElements} setConstructElements={setConstructElements}/>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="runtime">
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                            <CalcProvider>
                                <Runtime isRuntimeEnable={mode == ModeType.Runtime} runtimeElements={runtimeElements} setRuntimeElements={setRuntimeElements}/>
                            </CalcProvider>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>   
        </DragDropContext>
        
    </div>;
}
