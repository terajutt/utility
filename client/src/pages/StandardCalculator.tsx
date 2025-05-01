import { useState } from 'react';
import { Link } from 'wouter';

export default function StandardCalculator() {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState('');
  const [currentValue, setCurrentValue] = useState('0');
  const [lastOperation, setLastOperation] = useState<string | null>(null);
  const [resetOnNextDigit, setResetOnNextDigit] = useState(false);

  const addDigit = (digit: string) => {
    if (resetOnNextDigit) {
      setDisplay(digit);
      setResetOnNextDigit(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const addDecimal = () => {
    if (resetOnNextDigit) {
      setDisplay('0.');
      setResetOnNextDigit(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const addOperation = (op: string) => {
    calculate();
    setLastOperation(op);
    setCurrentValue(display);
    setHistory(`${display} ${op}`);
    setResetOnNextDigit(true);
  };

  const calculate = () => {
    if (!lastOperation) return;
    
    const current = parseFloat(currentValue);
    const next = parseFloat(display);
    let result = 0;
    
    switch (lastOperation) {
      case '+': result = current + next; break;
      case '-': result = current - next; break;
      case '*': result = current * next; break;
      case '/': result = current / next; break;
    }
    
    setHistory(`${currentValue} ${lastOperation} ${display} =`);
    setDisplay(String(result));
    setLastOperation(null);
    setResetOnNextDigit(true);
  };

  const clearCalc = () => {
    setDisplay('0');
    setHistory('');
    setCurrentValue('0');
    setLastOperation(null);
    setResetOnNextDigit(false);
  };

  const deleteChar = () => {
    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <Link href="/">
          <a className="text-gray-600 hover:text-primary mr-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </Link>
        <h2 className="text-2xl font-bold">Calculator</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
        <div className="mb-4 bg-gray-100 p-4 rounded-lg">
          <div className="text-sm text-gray-500 h-5 mb-1 text-right">{history}</div>
          <div className="text-2xl font-medium text-right h-8 overflow-hidden">{display}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <button onClick={clearCalc} className="col-span-2 bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition">AC</button>
          <button onClick={deleteChar} className="bg-gray-200 px-4 py-3 rounded-lg hover:bg-gray-300 transition"><i className="fas fa-backspace"></i></button>
          <button onClick={() => addOperation('/')} className="bg-gray-200 text-primary px-4 py-3 rounded-lg hover:bg-gray-300 transition">รท</button>
          
          <button onClick={() => addDigit('7')} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">7</button>
          <button onClick={() => addDigit('8')} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">8</button>
          <button onClick={() => addDigit('9')} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">9</button>
          <button onClick={() => addOperation('*')} className="bg-gray-200 text-primary px-4 py-3 rounded-lg hover:bg-gray-300 transition">ร—</button>
          
          <button onClick={() => addDigit('4')} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">4</button>
          <button onClick={() => addDigit('5')} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">5</button>
          <button onClick={() => addDigit('6')} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">6</button>
          <button onClick={() => addOperation('-')} className="bg-gray-200 text-primary px-4 py-3 rounded-lg hover:bg-gray-300 transition">โ’</button>
          
          <button onClick={() => addDigit('1')} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">1</button>
          <button onClick={() => addDigit('2')} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">2</button>
          <button onClick={() => addDigit('3')} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">3</button>
          <button onClick={() => addOperation('+')} className="bg-gray-200 text-primary px-4 py-3 rounded-lg hover:bg-gray-300 transition">+</button>
          
          <button onClick={() => addDigit('0')} className="col-span-2 bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">0</button>
          <button onClick={addDecimal} className="bg-white border border-gray-200 px-4 py-3 rounded-lg hover:bg-gray-100 transition">.</button>
          <button onClick={calculate} className="bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition">=</button>
        </div>
      </div>
    </div>
  );
}
