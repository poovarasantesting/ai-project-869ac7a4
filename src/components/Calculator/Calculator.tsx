import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import './Calculator.css';

export function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  const toggleSign = () => {
    setDisplay(display.charAt(0) === '-' ? display.substring(1) : '-' + display);
  };

  const inputPercent = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const inputDot = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      let newValue = 0;
      
      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '×':
          newValue = currentValue * inputValue;
          break;
        case '÷':
          newValue = currentValue / inputValue;
          break;
        default:
          break;
      }

      setPreviousValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    if (previousValue === null || operation === null) {
      return;
    }

    performOperation('=');
    setOperation(null);
  };

  return (
    <Card className="calculator-container">
      <CardHeader>
        <CardTitle className="text-center">Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="calculator">
          <div className="calculator-display">{display}</div>
          <div className="calculator-keypad">
            <div className="input-keys">
              <div className="function-keys">
                <Button 
                  variant="secondary"
                  className="key-clear" 
                  onClick={clearAll}
                >
                  AC
                </Button>
                <Button 
                  variant="secondary"
                  className="key-sign" 
                  onClick={toggleSign}
                >
                  ±
                </Button>
                <Button 
                  variant="secondary"
                  className="key-percent" 
                  onClick={inputPercent}
                >
                  %
                </Button>
              </div>
              <div className="digit-keys">
                <Button 
                  variant="outline"
                  className="key-0" 
                  onClick={() => inputDigit('0')}
                >
                  0
                </Button>
                <Button 
                  variant="outline"
                  className="key-dot" 
                  onClick={inputDot}
                >
                  .
                </Button>
                <Button 
                  variant="outline"
                  className="key-1" 
                  onClick={() => inputDigit('1')}
                >
                  1
                </Button>
                <Button 
                  variant="outline"
                  className="key-2" 
                  onClick={() => inputDigit('2')}
                >
                  2
                </Button>
                <Button 
                  variant="outline"
                  className="key-3" 
                  onClick={() => inputDigit('3')}
                >
                  3
                </Button>
                <Button 
                  variant="outline"
                  className="key-4" 
                  onClick={() => inputDigit('4')}
                >
                  4
                </Button>
                <Button 
                  variant="outline"
                  className="key-5" 
                  onClick={() => inputDigit('5')}
                >
                  5
                </Button>
                <Button 
                  variant="outline"
                  className="key-6" 
                  onClick={() => inputDigit('6')}
                >
                  6
                </Button>
                <Button 
                  variant="outline"
                  className="key-7" 
                  onClick={() => inputDigit('7')}
                >
                  7
                </Button>
                <Button 
                  variant="outline"
                  className="key-8" 
                  onClick={() => inputDigit('8')}
                >
                  8
                </Button>
                <Button 
                  variant="outline"
                  className="key-9" 
                  onClick={() => inputDigit('9')}
                >
                  9
                </Button>
              </div>
            </div>
            <div className="operator-keys">
              <Button 
                variant="default" 
                className="key-divide" 
                onClick={() => performOperation('÷')}
              >
                ÷
              </Button>
              <Button 
                variant="default" 
                className="key-multiply" 
                onClick={() => performOperation('×')}
              >
                ×
              </Button>
              <Button 
                variant="default" 
                className="key-subtract" 
                onClick={() => performOperation('-')}
              >
                −
              </Button>
              <Button 
                variant="default" 
                className="key-add" 
                onClick={() => performOperation('+')}
              >
                +
              </Button>
              <Button 
                variant="destructive" 
                className="key-equals" 
                onClick={handleEquals}
              >
                =
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}