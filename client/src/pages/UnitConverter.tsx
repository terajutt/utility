import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { 
  convertLength, 
  convertWeight, 
  convertTemperature, 
  LengthUnit, 
  WeightUnit, 
  TemperatureUnit 
} from '@/utils/unitConverters';

type ConverterType = 'length' | 'weight' | 'temperature';

export default function UnitConverter() {
  const [converterType, setConverterType] = useState<ConverterType>('length');
  
  // Length converter state
  const [lengthValue, setLengthValue] = useState<string>('');
  const [lengthFrom, setLengthFrom] = useState<LengthUnit>('m');
  const [lengthResults, setLengthResults] = useState({
    mm: 0, cm: 0, m: 0, km: 0, in: 0, ft: 0, yd: 0, mi: 0
  });
  
  // Weight converter state
  const [weightValue, setWeightValue] = useState<string>('');
  const [weightFrom, setWeightFrom] = useState<WeightUnit>('kg');
  const [weightResults, setWeightResults] = useState({
    mg: 0, g: 0, kg: 0, oz: 0, lb: 0
  });
  
  // Temperature converter state
  const [tempValue, setTempValue] = useState<string>('');
  const [tempFrom, setTempFrom] = useState<TemperatureUnit>('c');
  const [tempResults, setTempResults] = useState({
    c: 0, f: 0, k: 0
  });

  // Handle length conversion
  useEffect(() => {
    if (lengthValue) {
      const value = parseFloat(lengthValue);
      if (!isNaN(value)) {
        setLengthResults(convertLength(value, lengthFrom));
      }
    } else {
      setLengthResults({ mm: 0, cm: 0, m: 0, km: 0, in: 0, ft: 0, yd: 0, mi: 0 });
    }
  }, [lengthValue, lengthFrom]);

  // Handle weight conversion
  useEffect(() => {
    if (weightValue) {
      const value = parseFloat(weightValue);
      if (!isNaN(value)) {
        setWeightResults(convertWeight(value, weightFrom));
      }
    } else {
      setWeightResults({ mg: 0, g: 0, kg: 0, oz: 0, lb: 0 });
    }
  }, [weightValue, weightFrom]);

  // Handle temperature conversion
  useEffect(() => {
    if (tempValue) {
      const value = parseFloat(tempValue);
      if (!isNaN(value)) {
        setTempResults(convertTemperature(value, tempFrom));
      }
    } else {
      setTempResults({ c: 0, f: 0, k: 0 });
    }
  }, [tempValue, tempFrom]);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <Link href="/">
          <a className="text-gray-600 hover:text-primary mr-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </Link>
        <h2 className="text-2xl font-bold">Unit Converter</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">Convert between various units of measurement including length, weight, and temperature.</p>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setConverterType('length')} 
              className={`px-4 py-2 rounded-md text-sm font-medium ${converterType === 'length' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Length
            </button>
            <button 
              onClick={() => setConverterType('weight')} 
              className={`px-4 py-2 rounded-md text-sm font-medium ${converterType === 'weight' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Weight
            </button>
            <button 
              onClick={() => setConverterType('temperature')} 
              className={`px-4 py-2 rounded-md text-sm font-medium ${converterType === 'temperature' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Temperature
            </button>
          </div>
          
          {/* Length Converter */}
          {converterType === 'length' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="length-value" className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                  <input 
                    type="number" 
                    id="length-value"
                    value={lengthValue}
                    onChange={(e) => setLengthValue(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                    placeholder="Enter value"
                  />
                </div>
                <div>
                  <label htmlFor="length-from" className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <select 
                    id="length-from"
                    value={lengthFrom}
                    onChange={(e) => setLengthFrom(e.target.value as LengthUnit)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  >
                    <option value="mm">Millimeter (mm)</option>
                    <option value="cm">Centimeter (cm)</option>
                    <option value="m">Meter (m)</option>
                    <option value="km">Kilometer (km)</option>
                    <option value="in">Inch (in)</option>
                    <option value="ft">Foot (ft)</option>
                    <option value="yd">Yard (yd)</option>
                    <option value="mi">Mile (mi)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Millimeters</p>
                    <p className="text-lg font-medium">{lengthResults.mm.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Centimeters</p>
                    <p className="text-lg font-medium">{lengthResults.cm.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Meters</p>
                    <p className="text-lg font-medium">{lengthResults.m.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Kilometers</p>
                    <p className="text-lg font-medium">{lengthResults.km.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Inches</p>
                    <p className="text-lg font-medium">{lengthResults.in.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Feet</p>
                    <p className="text-lg font-medium">{lengthResults.ft.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Yards</p>
                    <p className="text-lg font-medium">{lengthResults.yd.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Miles</p>
                    <p className="text-lg font-medium">{lengthResults.mi.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Weight Converter */}
          {converterType === 'weight' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="weight-value" className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                  <input 
                    type="number" 
                    id="weight-value"
                    value={weightValue}
                    onChange={(e) => setWeightValue(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                    placeholder="Enter value"
                  />
                </div>
                <div>
                  <label htmlFor="weight-from" className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <select 
                    id="weight-from"
                    value={weightFrom}
                    onChange={(e) => setWeightFrom(e.target.value as WeightUnit)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  >
                    <option value="mg">Milligram (mg)</option>
                    <option value="g">Gram (g)</option>
                    <option value="kg">Kilogram (kg)</option>
                    <option value="oz">Ounce (oz)</option>
                    <option value="lb">Pound (lb)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Milligrams</p>
                    <p className="text-lg font-medium">{weightResults.mg.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Grams</p>
                    <p className="text-lg font-medium">{weightResults.g.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Kilograms</p>
                    <p className="text-lg font-medium">{weightResults.kg.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Ounces</p>
                    <p className="text-lg font-medium">{weightResults.oz.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Pounds</p>
                    <p className="text-lg font-medium">{weightResults.lb.toLocaleString(undefined, {maximumFractionDigits: 4})}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Temperature Converter */}
          {converterType === 'temperature' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="temp-value" className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                  <input 
                    type="number" 
                    id="temp-value"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                    placeholder="Enter value"
                  />
                </div>
                <div>
                  <label htmlFor="temp-from" className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <select 
                    id="temp-from"
                    value={tempFrom}
                    onChange={(e) => setTempFrom(e.target.value as TemperatureUnit)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  >
                    <option value="c">Celsius (°C)</option>
                    <option value="f">Fahrenheit (°F)</option>
                    <option value="k">Kelvin (K)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Celsius</p>
                    <p className="text-lg font-medium">{tempResults.c.toLocaleString(undefined, {maximumFractionDigits: 2})} °C</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Fahrenheit</p>
                    <p className="text-lg font-medium">{tempResults.f.toLocaleString(undefined, {maximumFractionDigits: 2})} °F</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Kelvin</p>
                    <p className="text-lg font-medium">{tempResults.k.toLocaleString(undefined, {maximumFractionDigits: 2})} K</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
