import React, { createContext, useState } from 'react';

export interface TCalculatorState {
    num: string,
    sign: string,
    res: string,
}

export interface TCalculatorContext {
    calculatorState: TCalculatorState,
    setCalculatorState: (s: TCalculatorState) => void
}

export interface TCalcProvider {
    children: JSX.Element
}

export const CalcContext = createContext<TCalculatorContext>({
    setCalculatorState: () => undefined,
    calculatorState: {
        num: '0',
        sign: '',
        res: '0',
    }
});

export const CalcProvider = ({ children }: TCalcProvider) => {
    const [calculatorState, setCalculatorState] = useState<TCalculatorState>({
        num: '0',
        sign: '',
        res: '0',
    })

    return <CalcContext.Provider value={{calculatorState, setCalculatorState}}>
                {children}
    </CalcContext.Provider>;
}