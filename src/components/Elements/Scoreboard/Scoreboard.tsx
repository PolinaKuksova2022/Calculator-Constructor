import React, { useContext } from 'react';
import '../../Style/main.scss';
import { TElementsMode } from '../TElementMode';
import { CalcContext, TCalculatorContext} from '../../../CalcProvider/CalcProvider';
import { ModeType } from '../../ModeSelector/ModeSelector';

export const Scoreboard = ({ mode }: TElementsMode) => {

    const {calculatorState} = useContext<TCalculatorContext>(CalcContext);

    return <div
            className='scoreboard'>
        <div className="scoreboard__inner">
            <div className="scoreboard__count" >{
                mode == ModeType.Runtime 
                ?  calculatorState.num !=='0' ? calculatorState.num : calculatorState.res
                : '0'
            }</div>
        </div>
    </div>;
}