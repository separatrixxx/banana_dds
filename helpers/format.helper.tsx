import { format } from 'date-fns';


export function formatPrice(price: number, locale: string | undefined): string {
    if (locale === 'ru') {
        return price.toLocaleString('ru-RU') + '₽';
    }

    return '$' + price.toLocaleString('en-EN');
}

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
