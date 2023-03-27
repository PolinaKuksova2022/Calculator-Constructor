import React, { useContext } from 'react';
import '../../Style/main.scss';
import { Button } from '../../Button/Button';
import { TElementsMode } from '../TElementMode';
import { ModeType } from '../../ModeSelector/ModeSelector';
import { CalcContext, TCalculatorContext } from '../../../CalcProvider/CalcProvider';

export const Equals = ({ mode }: TElementsMode) => {
  const { calculatorState, setCalculatorState } = useContext<TCalculatorContext>(CalcContext);

  const equalsClick = () => {
    if (calculatorState.res && calculatorState.num && calculatorState.sign !== '') {
      const math = (a: string, b: string, sign: string ) => {
        const calculationStr = `${a} ${sign} ${b}`;

        let calculation = new Function('return ' + calculationStr)();

        if (calculation.toString().match(/\.(\d+)/)?.[1].length > 4) 
          calculation = Math.floor(calculation).toFixed(3);

        if(calculation.toString().length > 6) 
          calculation = 'big number';

        if(calculatorState.num == '0' && calculatorState.sign == '/')
          calculation = 'undefined';
          
        return calculation;
      };
      setCalculatorState({
        num: math(calculatorState.res, calculatorState.num, calculatorState.sign),
        sign: '',
        res: '0',
      });
    }
  };

  return (
    <div className="equals">
      <Button
        type={mode == ModeType.Construct ?  'btn btn-noactive btn-equals' :'btn btn-equals'}
        onClick={() => {
          mode == ModeType.Runtime ? equalsClick() : console.log('= Construct');
        }}
      >
        =
      </Button>
    </div>
  );
};
