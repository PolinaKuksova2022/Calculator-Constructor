import React from 'react';
import '../Style/main.scss';
import { Button } from '../Button/Button';

export const Equals = () => {
    return <div className='equals'>
        <Button
            type={'btn btn-equals'}
            onClick={() =>
                {
                    console.log(`= clicked!`);
                }
            }
        >
            =
        </Button>
    </div>;
}