export type LengthUnit = 'mm' | 'cm' | 'm' | 'km' | 'in' | 'ft' | 'yd' | 'mi';
export type WeightUnit = 'mg' | 'g' | 'kg' | 'oz' | 'lb';
export type TemperatureUnit = 'c' | 'f' | 'k';

interface LengthResults {
  mm: number;
  cm: number;
  m: number;
  km: number;
  in: number;
  ft: number;
  yd: number;
  mi: number;
}

interface WeightResults {
  mg: number;
  g: number;
  kg: number;
  oz: number;
  lb: number;
}

interface TemperatureResults {
  c: number;
  f: number;
  k: number;
}

// Length Converter
export function convertLength(value: number, from: LengthUnit): LengthResults {
  // Convert to meters first
  let meters = 0;
  switch (from) {
    case 'mm': meters = value / 1000; break;
    case 'cm': meters = value / 100; break;
    case 'm': meters = value; break;
    case 'km': meters = value * 1000; break;
    case 'in': meters = value * 0.0254; break;
    case 'ft': meters = value * 0.3048; break;
    case 'yd': meters = value * 0.9144; break;
    case 'mi': meters = value * 1609.34; break;
  }
  
  // Convert meters to all units
  return {
    mm: meters * 1000,
    cm: meters * 100,
    m: meters,
    km: meters / 1000,
    in: meters / 0.0254,
    ft: meters / 0.3048,
    yd: meters / 0.9144,
    mi: meters / 1609.34
  };
}

// Weight Converter
export function convertWeight(value: number, from: WeightUnit): WeightResults {
  // Convert to grams first
  let grams = 0;
  switch (from) {
    case 'mg': grams = value / 1000; break;
    case 'g': grams = value; break;
    case 'kg': grams = value * 1000; break;
    case 'oz': grams = value * 28.3495; break;
    case 'lb': grams = value * 453.592; break;
  }
  
  // Convert grams to all units
  return {
    mg: grams * 1000,
    g: grams,
    kg: grams / 1000,
    oz: grams / 28.3495,
    lb: grams / 453.592
  };
}

// Temperature Converter
export function convertTemperature(value: number, from: TemperatureUnit): TemperatureResults {
  // Convert to celsius first
  let celsius = 0;
  switch (from) {
    case 'c': celsius = value; break;
    case 'f': celsius = (value - 32) * 5/9; break;
    case 'k': celsius = value - 273.15; break;
  }
  
  // Convert celsius to all units
  return {
    c: celsius,
    f: (celsius * 9/5) + 32,
    k: celsius + 273.15
  };
}
