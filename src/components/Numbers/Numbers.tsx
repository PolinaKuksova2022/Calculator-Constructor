import React from 'react';
import '../Style/main.scss';
import { Button } from '../Button/Button';

export const Numbers = () => {
    const numbers = [
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [0, ','],
    ];
    
    return <div className='numbers'>
        {numbers.flat().map((btn, i) => {
            return(
                <Button
                    key={i}
                    type={btn === 0 ? 'btn btn-action zero' : 'btn btn-action'}
                    onClick={() =>
                        {
                            console.log(`${btn} clicked!`);
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