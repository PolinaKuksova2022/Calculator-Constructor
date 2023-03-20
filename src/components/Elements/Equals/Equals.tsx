import React from 'react';
import '../../Style/main.scss';
import { Button } from '../../Button/Button';
import { TElementsMode } from '../TElementMode';
import { ModeType } from '../../ModeSelector/ModeSelector';


export const Equals = ({ mode }: TElementsMode) => {
    return <div
            className='equals'
        >
        <Button
            type={'btn btn-equals'}
            onClick={() =>
                { console.log('in btn', mode)
                    mode == ModeType.Construct 
                    ?  console.log(`= Construct!`)
                    : console.log('= runtime');
                }
            }
        >
            =
        </Button>
    </div>;
}