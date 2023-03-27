import React, { useContext } from 'react';
import '../../Style/main.scss';
import { Button } from '../../Button/Button';
import { TElementsMode } from '../TElementMode';
import { CalcContext, TCalculatorContext } from '../../../CalcProvider/CalcProvider';
import { ModeType } from '../../ModeSelector/ModeSelector';

export const Toolbar = ({ mode }: TElementsMode) => {
    const tools = ['/', '*', '+', '-', 'C'];
    
    const {calculatorState, setCalculatorState} = useContext<TCalculatorContext>(CalcContext);
    
    // operation
    const signClick = (btn: string) => {
        setCalculatorState({
            num: '0',
            sign: btn,
            res: calculatorState.num,
        })
      }

    //equal

    //reset
    const resetClick = (btn: string) =>{
        setCalculatorState({
            num: '0',
            sign: '',
            res: '0',
        })
    }

    const handleBtnClick = (btn: string) => {
        const results: { [key: string]: (btn: string) => void} = {
          '/': signClick,
          '*': signClick,
          '-': signClick,
          '+': signClick,
          'C': resetClick
        }
        return results[btn](btn)
    }


    return <div
            className='toolbar'
        >
        {tools.map((btn, i) => {
            return(
                <Button
                    key={i}
                    type={mode == ModeType.Construct ?  'btn btn-noactive' :'btn btn-action'}
                    onClick={() =>
                        {  mode == ModeType.Runtime ?
                            handleBtnClick(btn) : 
                            console.log(`${btn} construct!`)
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