import React from 'react';
import '../../Style/main.scss';
import { Button } from '../../Button/Button';
import { TElementsMode } from '../TElementMode';

export const Toolbar = ({ mode }: TElementsMode) => {
    const tools = ['/', 'х', '+', '-'];
    
    return <div
            className='toolbar'
        >
        {tools.map((btn, i) => {
            return(
                <Button
                    key={i}
                    type={'btn btn-action'}
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