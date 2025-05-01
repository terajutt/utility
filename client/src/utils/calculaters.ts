// GST Calculator
export function calculateGST(amount: number, percentage: number) {
  const gstAmount = (amount * percentage) / 100;
  const totalAmount = amount + gstAmount;
  
  return {
    gstAmount,
    totalAmount
  };
}

// BMI Calculator
export function calculateBMI(weight: number, heightCm: number) {
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  
  let category = '';
  let percentage = 0;
  
  if (bmi < 18.5) {
    category = 'Underweight';
    percentage = 15;
  } else if (bmi < 24.9) {
    category = 'Normal weight';
    percentage = 40;
  } else if (bmi < 29.9) {
    category = 'Overweight';
    percentage = 65;
  } else {
    category = 'Obese';
    percentage = 90;
  }
  
  return {
    bmi,
    category,
    percentage
  };
}
