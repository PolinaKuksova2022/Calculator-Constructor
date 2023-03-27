import React, { useContext } from 'react';
import '../../Style/main.scss';
import { Button } from '../../Button/Button';
import { TElementsMode } from '../TElementMode';
import { ModeType } from '../../ModeSelector/ModeSelector';
import { CalcContext, TCalculatorContext } from '../../../CalcProvider/CalcProvider';

export const Numbers = ({ mode }: TElementsMode) => {
  const numbers = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.'],
  ];

  const { calculatorState, setCalculatorState } = useContext<TCalculatorContext>(CalcContext);

  //Number
  const numberClick = (btn: string) => {
    let numberValue = calculatorState.num;
    if (calculatorState.num == '0') {
      numberValue = btn;
    } else {
      if (calculatorState.num.length < 4) numberValue = calculatorState.num + btn;
      console.log(calculatorState.num.length + 1);
    }

    setCalculatorState({
      ...calculatorState,
      num: numberValue,
    });
  };

  console.log(calculatorState);
  //Comma
  const commaClick = (btn: string) => {
    setCalculatorState({
      ...calculatorState,
      num: !calculatorState.num.includes('.') ? calculatorState.num + btn : calculatorState.num,
    });
    console.log(!calculatorState.num.toString().includes('.'));
  };
  return (
    <div className="numbers">
      {numbers.flat().map((btn, i) => {
        return (
          <Button
            key={i}
            type={
                mode == ModeType.Construct ?  'btn btn-noactive' :
                btn === '0' ? 'btn btn-action zero' : 'btn btn-action'}
            onClick={() => {
              mode == ModeType.Runtime
                ? btn == '.'
                  ? commaClick(btn)
                  : numberClick(btn)
                : console.log(btn, 'Construct');
            }}
          >
            {btn}
          </Button>
        );
      })}
    </div>
  );
};
