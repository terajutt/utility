import { useState, useEffect } from 'react';
import { Link } from 'wouter';

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
}

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<string>('');
  const [age, setAge] = useState<AgeResult | null>(null);

  useEffect(() => {
    // Set max date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const maxDate = `${yyyy}-${mm}-${dd}`;
    
    const dateInput = document.getElementById('birth-date') as HTMLInputElement;
    if (dateInput) {
      dateInput.setAttribute('max', maxDate);
    }
  }, []);

  useEffect(() => {
    if (birthDate) {
      calculateAge();
    }
  }, [birthDate]);

  const calculateAge = () => {
    if (!birthDate) {
      setAge(null);
      return;
    }
    
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();
    
    if (days < 0) {
      months--;
      // Get the number of days in the previous month
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Calculate total days
    const timeDiff = today.getTime() - birthDateObj.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    setAge({
      years,
      months,
      days,
      totalDays
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <Link href="/">
          <a className="text-gray-600 hover:text-primary mr-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </Link>
        <h2 className="text-2xl font-bold">Age Calculator</h2>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">Calculate your exact age in years, months, and days based on your date of birth.</p>
        
        <div>
          <label htmlFor="birth-date" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
          <input 
            type="date" 
            id="birth-date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
        
        {age && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-lg font-medium mb-4">Your Age</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">{age.years}</p>
                <p className="text-sm text-gray-500">Years</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-secondary">{age.months}</p>
                <p className="text-sm text-gray-500">Months</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-accent">{age.days}</p>
                <p className="text-sm text-gray-500">Days</p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Total Days</p>
                <p className="text-xl">You have been alive for {age.totalDays.toLocaleString()} days!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
