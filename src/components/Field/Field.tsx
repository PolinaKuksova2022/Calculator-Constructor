import React from 'react';
import '../Style/main.scss';
import { Mode } from '../Mode/Mode';
import { Constructor } from '../Constructor/Constructor';
import { Runtime } from '../Runtime/Runtime';

export const Field = () => {
    return <div className='field'>
        <Mode/>
        <div className="field__panel">
            <Constructor/>
            <Runtime/>
        </div>
    </div>;
}
