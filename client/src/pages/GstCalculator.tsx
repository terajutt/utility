import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { calculateGST } from '@/utils/calculators';

export default function GstCalculator() {
  const [amount, setAmount] = useState<string>('');
  const [percentage, setPercentage] = useState<number>(18);
  const [gstValue, setGstValue] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    handleCalculate();
  }, [amount, percentage]);

  const handleCalculate = () => {
    if (amount && percentage) {
      const result = calculateGST(parseFloat(amount), percentage);
      setGstValue(result.gstAmount);
      setTotalAmount(result.totalAmount);
    } else {
      setGstValue(0);
      setTotalAmount(0);
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
        <h2 className="text-2xl font-bold">GST Calculator</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">Calculate GST amount and total price based on the original amount and GST percentage.</p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="gst-amount" className="block text-sm font-medium text-gray-700 mb-1">Original Amount (₹)</label>
            <input 
              type="number" 
              id="gst-amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
              placeholder="Enter amount"
            />
          </div>
          
          <div>
            <label htmlFor="gst-percentage" className="block text-sm font-medium text-gray-700 mb-1">GST Percentage (%)</label>
            <div className="flex gap-3">
              <button 
                onClick={() => setPercentage(5)} 
                className={`px-3 py-2 rounded-md text-sm ${percentage === 5 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                5%
              </button>
              <button 
                onClick={() => setPercentage(12)} 
                className={`px-3 py-2 rounded-md text-sm ${percentage === 12 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                12%
              </button>
              <button 
                onClick={() => setPercentage(18)} 
                className={`px-3 py-2 rounded-md text-sm ${percentage === 18 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                18%
              </button>
              <button 
                onClick={() => setPercentage(28)} 
                className={`px-3 py-2 rounded-md text-sm ${percentage === 28 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                28%
              </button>
              <input 
                type="number" 
                value={percentage !== 5 && percentage !== 12 && percentage !== 18 && percentage !== 28 ? percentage : ''}
                onChange={(e) => setPercentage(parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                placeholder="Custom"
              />
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-lg font-medium mb-4">Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">GST Amount</p>
                <p className="text-xl font-semibold">₹{gstValue.toFixed(2)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                <p className="text-xl font-semibold">₹{totalAmount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
