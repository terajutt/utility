import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { calculateBMI } from '@/utils/calculators';

export default function BmiCalculator() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmiValue, setBmiValue] = useState<number>(0);
  const [bmiCategory, setBmiCategory] = useState<string>('');
  const [bmiPercentage, setBmiPercentage] = useState<number>(0);

  useEffect(() => {
    if (weight && height) {
      const weightKg = parseFloat(weight);
      const heightCm = parseFloat(height);
      
      const result = calculateBMI(weightKg, heightCm);
      setBmiValue(result.bmi);
      setBmiCategory(result.category);
      setBmiPercentage(result.percentage);
    } else {
      setBmiValue(0);
      setBmiCategory('');
      setBmiPercentage(0);
    }
  }, [weight, height]);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <Link href="/">
          <a className="text-gray-600 hover:text-primary mr-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </Link>
        <h2 className="text-2xl font-bold">BMI Calculator</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">Calculate your Body Mass Index (BMI) to determine if you're at a healthy weight for your height.</p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
            <input 
              type="number" 
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
              placeholder="Enter weight in kilograms"
            />
          </div>
          
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
            <input 
              type="number" 
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
              placeholder="Enter height in centimeters"
            />
          </div>
          
          {bmiValue > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-medium mb-4">Your Results</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-gray-50 p-4 rounded-lg flex-1">
                  <p className="text-sm text-gray-500 mb-1">Your BMI</p>
                  <p className="text-2xl font-semibold">{bmiValue.toFixed(1)}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex-1">
                  <p className="text-sm text-gray-500 mb-1">Weight Category</p>
                  <p className={`text-xl font-semibold ${
                    bmiCategory === 'Underweight' || bmiCategory === 'Obese'
                      ? 'text-red-500'
                      : bmiCategory === 'Overweight'
                      ? 'text-amber-500'
                      : 'text-green-500'
                  }`}>
                    {bmiCategory}
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="h-6 rounded-full bg-gray-200 overflow-hidden">
                  <div 
                    className="h-full rounded-full" 
                    style={{
                      width: `${bmiPercentage}%`, 
                      background: 'linear-gradient(to right, #3B82F6, #8B5CF6)'
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Underweight</span>
                  <span>Normal</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
