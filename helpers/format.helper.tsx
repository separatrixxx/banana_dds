import { format } from 'date-fns';


export function formatDate(date: string): string {
  return format(new Date(date), 'dd.MM.yyyy');
}

export function formatTimestamp(timestamp: number): string {
  return format(new Date(timestamp * 1000), 'dd.MM.yyyy');
}

export function formatText(count: number): 'nom' | 'sin' | 'gen' {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return 'gen';
    }
    
    if (lastDigit === 1) {
      return 'nom';
    }
    
    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'sin';
    }
    
    return 'gen';
};

export function formatDeviceName(deviceName: string): string {
  if (deviceName.length <= 8) {
    return deviceName;
  }
  
  const start = deviceName.slice(0, 4);
  const end = deviceName.slice(-4);
  
  return `${start}........${end}`;
}