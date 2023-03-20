import React from 'react';
import '../../Style/main.scss';
import { Button } from '../../Button/Button';
import { TElementsMode } from '../TElementMode';
import { ModeType } from '../../ModeSelector/ModeSelector';

export const Numbers = ({ mode }: TElementsMode) => {
    const numbers = [
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [0, ','],
    ];
    
    return <div
            className='numbers'
        >
        {numbers.flat().map((btn, i) => {
            return(
                <Button
                    key={i}
                    type={btn === 0 ? 'btn btn-action zero' : 'btn btn-action'}
                    onClick={() =>
                        {
                            mode == ModeType.Construct 
                            ?  console.log(`= Construct!`)
                            : console.log('= runtime');
                        }
                    }
                >
                    {btn}
                </Button>
            )
        })

        }
    </div>;
}